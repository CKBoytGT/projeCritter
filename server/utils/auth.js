import * as jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiration = "1h";

const withAuth = ({ req }) => {
  let token = req.query.token || req.headers.authorization || req.body.token;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  console.log(token);
  if (!token) {
    console.log("Missing token.");
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
    return data;
  } catch {
    console.log("Invalid token.");
  }
};

const writeToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

export default { withAuth, writeToken };

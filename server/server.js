// express code
import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import session from "express-session";
import connectMongo from "connect-mongodb-session";

// db connection
import { connectDB } from "./db/connectDB.js";

// passport for auth
import passport from "passport";
import { buildContext } from "graphql-passport";
import { configurePassport } from "./passport/passport.config.js";
configurePassport();

// apollo server
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

// type defs and resolvers (change to merged versions once set up)
import mergedTypeDefs from "./graphql/typeDefs/index.js";
import mergedResolvers from "./graphql/resolvers/index.js";

//set port
const PORT = process.env.PORT || 3001;

//app instantiation
const __dirname = path.resolve();
const app = express();

const httpServer = http.createServer(app);

// session
const MongoDBStore = connectMongo(session);

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pctestDB",
  collection: "sessions",
});

store.on("error", (err) => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // don't save on every request
    saveUninitialized: false, // don't save uninitialized sessions
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true, // prevents Cross-Site Scripting (XSS) attacks
    },
    store: store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// apollo server constructor
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  // TODO: update for production
  cors({ origin: `http://localhost:5173`, credentials: true }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }),
  })
);

// set up build functionality
app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
await connectDB();

console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);

// // start applo server then apply middleware app object.
// server.start().then(() => {
//   server.applyMiddleware({ app });
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // serving distribution folder build
// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// // db connection once started express erver listen
// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`exp.server.runnning: http://localhost:${PORT}`);
//     console.log(
//       `graphql.server.running: http://localhost:${PORT}${server.graphqlPath}`
//     );
//   });
// });

import User from "../../models/user.js";

const userResolvers = {
  Query: {
    // formerly "returnUser"
    user: async (_, __, context) => {
      if (context) {
        const currentUser = await User.findOne({ _id: context._id })
          .select("-__v -password")
          .populate("projects");
        return currentUser;
      } else {
        throw new Error("Not authorized.");
      }
    },
  },

  Mutation: {
    // formerly "createUser"
    signUp: async (_, { input }) => {
      const { username, email, password } = input;
      if (!username || !email || !password) {
        throw new Error("All fields are required.");
      }

      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        throw new Error("Username already in use.");
      }

      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        throw new Error("Email address already in use.");
      }

      const user = await User.create(input);
      const token = writeToken(user);
      return { user, token };
    },

    login: async (_, { input }) => {
      const { email, password } = input;
      if (!email || !password) {
        throw new Error("All fields are required.");
      }

      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Incorrect email or password.");
      }

      const pass = await user.isCorrectPassword(password);
      if (!pass) {
        throw new Error("Incorrect email or password.");
      }

      const token = writeToken(user);
      return { user, token };
    },
  },
};

export default userResolvers;

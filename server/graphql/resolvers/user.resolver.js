import bcrypt from "bcrypt";
import Project from "../../models/project.js";
import User from "../../models/user.js";

const userResolvers = {
  Query: {
    authUser: async (_, __, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (err) {
        console.error("Error in authUser: ", err);
        throw new Error("Internal server error.");
      }
    },

    user: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        // const user = await User.findById(userId).select("-__v -password");
        return user;
      } catch (err) {
        console.error("Error in user query:", err);
        throw new Error(err.message || "Error getting user");
      }
    },
  },

  Mutation: {
    // formerly "createUser"
    signUp: async (_, { input }, context) => {
      try {
        const { name, email, password } = input;
        if (!name || !email || !password) {
          throw new Error("All fields are required.");
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
          throw new Error("Email address already in use.");
        }

        if (password.length < 8) {
          throw new Error("Password must be at least eight characters long.");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (err) {
        console.error("Error in signUp: ", err);
        throw new Error(err.message || "Internal server error.");
      }
    },

    login: async (_, { input }, context) => {
      try {
        const { email, password } = input;
        if (!email || !password) {
          throw new Error("All fields are required.");
        }

        const { user } = await context.authenticate("graphql-local", {
          email,
          password,
        });

        await context.login(user);
        return user;
      } catch (err) {
        console.error("Error in login: ", err);
        throw new Error(err.message || "Internal server error.");
      }
    },

    logout: async (_, __, context) => {
      try {
        await context.logout();
        context.req.session.destroy((err) => {
          if (err) throw err;
        });
        context.res.clearCookie("connect.sid");

        return { message: "Logged out successfully." };
      } catch (err) {
        console.error("Error in logout: ", err);
        throw new Error(err.message || "Internal server error.");
      }
    },
  },

  User: {
    projects: async (parent) => {
      try {
        const projects = await Project.find({ userId: parent._id });
        return projects;
      } catch (err) {
        console.log("Error in getting user projects: ", err);
        throw new Error(err.message || "Internal server error");
      }
    },
  },
};

export default userResolvers;

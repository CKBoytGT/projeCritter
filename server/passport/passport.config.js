import bcrypt from "bcrypt";
import { GraphQLLocalStrategy } from "graphql-passport";
import passport from "passport";
import User from "../models/user.js";

export const configurePassport = () => {
  passport.serializeUser((user, done) => {
    console.log("Serializing user.");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    console.log("Deserializing user.");
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email or password.");
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          throw new Error("Invalid email or password.");
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }),
  );
};

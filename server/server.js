import { connectDB } from "./db/connectDB.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import connectMongo from "connect-mongodb-session";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import { buildContext } from "graphql-passport";
import http from "http";
import passport from "passport";
import path from "path";
import { configurePassport } from "./passport/passport.config.js";
import mergedResolvers from "./graphql/resolvers/index.js";
import mergedTypeDefs from "./graphql/typeDefs/index.js";

dotenv.config();

configurePassport();

const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();
const app = express();

const httpServer = http.createServer(app);

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
  }),
);

app.use(passport.initialize());
app.use(passport.session());

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors({ origin: `http://localhost:5173`, credentials: true }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }) => buildContext({ req, res }),
  }),
);

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
await connectDB();

console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);

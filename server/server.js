// express code
import express from "express";
// const path = require("path");
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//db connection
import { connectDB } from "./db/connectDB.js";

// apollo server
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

// type defs and resolvers (change to merged versions once set up)
import mergedTypeDefs from "./graphql/typeDefs/index.js";
import mergedResolvers from "./graphql/resolvers/index.js";

// jwt auth
import withAuth from "./utils/auth.js";

//set port
const PORT = process.env.PORT || 3001;

//app instantiation
// const __dirname = path.resolve();
const app = express();
const httpServer = http.createServer(app);

// apollo server constructor
const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context: withAuth,
});

await server.start();

app.use(
  "/graphql",
  cors({ origin: "http://localhost:3000", credentials: true }),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// apollo client
const client = new ApolloClient({
  uri:
    import.meta.env.VITE_NODE_ENV === "development"
      ? `http://localhost:3000/graphql`
      : "/graphql",
  cache: new InMemoryCache(),
  credentials: "include", // send cookies along with every request to server
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

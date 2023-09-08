import React from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const token = localStorage.getItem("token");

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

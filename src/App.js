import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { customTheme } from "./theme";

import Home from "./pages/Home";

function App() {
  const client = new ApolloClient({
    uri: "https://ta9m5bno.api.sanity.io/v1/graphql/production/default"
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Switch>
            <Route path="" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

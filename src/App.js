import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { customTheme } from "./theme";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import WorkSpaceMainPage from "./components/PA/WorkSpace/WorkSpaceMainPage";

function App() {
    return (
        <Router>
            <Header title="Associate Engineering" />
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/PAWorkSpace">
                    <WorkSpaceMainPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

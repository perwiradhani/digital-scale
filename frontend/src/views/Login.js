import Login from "../pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
        <Switch>
            <Route path="/login">
            <Login />
            </Route>
        </Switch>
        </Router>
    );
    }

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Approve from "./pages/approve/Approve";
import ApproveList from "./pages/approveList/ApproveList";
import InputManual from "./pages/inputManual/InputManual";
import RekapLaporan from "./pages/rekapLaporan/RekapLaporan";
import Edit from "./pages/edit/Edit";
import EditList from "./pages/editList/EditList";
import UpdateUser from "./pages/updateUser/UpdateUser";
import TruckList from "./pages/truckList/TruckList";
import NewTruck from "./pages/newTruck/NewTruck";
import UpdateTruck from "./pages/updateTruck/UpdateTruck";
import Timbang from "./pages/scan/Timbang";

function App() {
    return (
        <Router>
            {/* <div>
        <Switch>
        <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div> */}
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/users">
                        <UserList />
                    </Route>
                    <Route path="/trucks">
                        <TruckList />
                    </Route>
                    <Route path="/user/:userId">
                        <UpdateUser />
                    </Route>
                    <Route path="/truck/:userId">
                        <UpdateTruck />
                    </Route>
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/newTruck">
                        <NewTruck />
                    </Route>
                    <Route path="/verifikasi">
                        <ProductList />
                    </Route>
                    <Route path="/verif/:verifId">
                        <Product />
                    </Route>
                    <Route path="/approves">
                        <ApproveList />
                    </Route>
                    <Route path="/approved/:approvedId">
                        <Approve />
                    </Route>
                    <Route path="/edit">
                        <EditList />
                    </Route>
                    <Route path="/edit/:userId">
                        <Edit />
                    </Route>
                    <Route exact path="/rekapLaporan">
                        <RekapLaporan />
                    </Route>
                    <Route exact path="/inputManual">
                        <InputManual />
                    </Route>
                    <Route exact path="/scan">
                        <Timbang />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

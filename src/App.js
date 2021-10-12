import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Containers/Home/home";
import View from "./Containers/View/view";
import Profile from "./Containers/Profile/profile";
import Checkout from "./Components/Checkout/checkout";
import Footer from "./Components/Footer/Footer";
import { GlobalProvider } from "./Context/globalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view" component={View} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/view" component={View}>
              <Route path="/view/checkout" component={Checkout} />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

import{BrowserRouter,Route,Switch } from "react-router-dom";
import homePage from "./Pages/homePage";
import NavBar from "./Pages/NavBar";


function App() {
  return(
  <BrowserRouter>
  <NavBar/>
   <Switch>
      <Route component={homePage} path='/' exact/>
   </Switch>  
  </BrowserRouter>
  )
  
}

export default App;

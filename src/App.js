import './App.css';
import Content from './client/Content';
import Header from './client/Header';
import { Contact } from './client/Contact';
import { Footer } from './client/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Slider } from './client/Slider';
import { Himg } from './client/Himg';

function App() {
  return (
 <>

 <Router>
 <Header />

 <Switch>
   
   <Route path="/contact">
     <Contact/>
     </Route>
     
     <Route path="/slider">
     <Slider/>
     </Route>
     <Route path="/content">
     <Content/>
     </Route>

 
 </Switch>
 
 <Footer/>
 </Router>

 </>
  );
}

export default App;

import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Ashley from './components/mujeres files/Ashley';
import Crystal from './components/mujeres files/Crystal';
import Ebony from './components/mujeres files/Ebony';
import Jessica from './components/mujeres files/Jessica';
import Kessa from './components/mujeres files/Kessa';
import Leanette from './components/mujeres files/Leanette';
import Nova from './components/mujeres files/Nova';
import Shanoa from './components/mujeres files/Shanoa';
import Sonya from './components/mujeres files/Sonya';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Error404 from './components/Error404';



class App extends React.Component{




  render(){
    return (
      <div>

        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path ='/' component={Splash}/>
            <Route path="/ashley" component={Ashley}/>
            <Route path="/Crystal" component={Crystal}/>
            <Route path="/Ebony" component={Ebony}/>
            <Route path="/Jessica" component={Jessica}/>
            <Route path="/Kessa" component={Kessa}/>
            <Route path="/Leanette" component={Leanette}/>
            <Route path="/Nova" component={Nova}/>
            <Route path="/Shanoa" component={Shanoa}/>
            <Route path="/Sonya" component={Sonya}/>
            <Route component={Error404}/>
          </Switch>
        </BrowserRouter>
       
        <Footer/>
        </div>
    );
  }
}

export default App;
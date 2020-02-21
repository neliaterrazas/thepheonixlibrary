import React from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Ashley from './components/mujeres files/Ashley';
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
            <Route component={Error404}/>
          </Switch>
        </BrowserRouter>
       
        <Footer/>
        </div>
    );
  }
}

export default App;
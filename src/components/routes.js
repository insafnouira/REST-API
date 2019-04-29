import React,{Component} from 'react'; 
import {Route} from 'react-router-dom';
import './App.css'

import Home from './Home'
import ContactAdd from './contactadd';
import ContactList from './contactlist';
import ModalEdit from './editcontact'



class Routes extends Component {
    
    
   
      render() { 

        return (
           
                
            <div>
                <Route exact path="/" component={Home} />
                <Route  path="/contact-Add" component={ContactAdd} />
                <Route  path="/contact-list" component={ContactList} />
                <Route  path="/contact-Edit" component={ModalEdit} />
            </div>
            
            
          );
    }
}
 
export default Routes;
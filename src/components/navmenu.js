import React from 'react';
import { Nav,  Button } from 'react-bootstrap';
import ModalAdd from './addcontact'
import './App.css'
import {Link} from 'react-router-dom'



 class Navs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalShow: false };
    }
     
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
     
        <Nav className="navv" activeKey="/">
            <Nav.Item>
          <Link className='home' to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to='/contact-Add'> <Button className='button' onClick={() => this.setState({ modalShow: true })} >Add Contact</Button>
            </Link>
            <ModalAdd show={this.state.modalShow}
                        onHide={modalClose}/>
          </Nav.Item>
          <Nav.Item>
           <Link to='/contact-list'> <Button  className='button' >Contact List</Button></Link>
            
          </Nav.Item>
         
        </Nav>
        
       
        
      
    );
  }
}
export default Navs;
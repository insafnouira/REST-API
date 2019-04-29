import React, { Component } from 'react';
import ModalAdd from './addcontact';
class ContactAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           <ModalAdd/>
        </div> );
    }
}
 
export default ContactAdd;
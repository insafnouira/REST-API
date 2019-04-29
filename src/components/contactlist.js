import React, { Component } from 'react';
import Liste from './listecontact';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           <Liste/>
        </div> );
    }
}
 
export default ContactList;
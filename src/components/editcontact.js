import React from 'react'
import {Modal, Button, Form, Col} from   'react-bootstrap'

import {FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import './App.css'


class ModalEdit extends React.Component {
    constructor() {
        super();
     
        this.state = {
         name:'',
         lastname:'',
         phone:''
      
        }}
   handleChange=(event)=>
     {
          this.setState(
           
            { [event.target.name]:event.target.value} )  
                        
     }

     componentDidMount=()=>

     {
         this.setState({
             ...this.props.contacts.filter(el=>el._id===this.props._id)[0]
         })
     }
     editContact=()=>
     {
        axios.put(`/edit-contact/${this.state._id}`,{
            name:this.state.name,
         phone:this.state.phone,
         lastname:this.state.lastname
      }) 
       .then(()=>this.props.editContactReducer({...this.state})) 
       .catch((err)=>alert(err))
     }

    render() {
        
         
          
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
           
            
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                <FormGroup row>
                <Label for="Name" sm={2}>Name</Label>
                <Col sm={10}>
                <Input   name="name" value={this.state.name} onChange={this.handleChange}/> 
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="lastname" sm={2}>LastName</Label>
                <Col sm={10}>
                    <Input name="lastname" value={this.state.lastname} onChange={this.handleChange}  />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Phone Number" sm={2}>Phone Number</Label>
                <Col sm={10}>
                    <Input   name="phone" value={this.state.phone} onChange={this.handleChange} />
                </Col>
                </FormGroup>
                </Form>
          </Modal.Body>
          <Modal.Footer className='button-modal'>
         <Button  className='button-modal1'  onClick={() => { this.editContact(); this.props.onHide();}}>Edit</Button>

            <Button  className='button-modal2' onClick={this.props.onHide }>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  const mapStateToProps=(state)=>
{
    return {
        contacts:state.reducercontact
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editContactReducer:editcontact=>
        {
            dispatch({
                type:'EDIT_CONTACT',
                editcontact
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalEdit);
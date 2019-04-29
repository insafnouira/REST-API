import React from 'react'
import {Modal, Button, Form, Col} from   'react-bootstrap'

import {FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import './App.css'


class ModalAdd extends React.Component {
    constructor() {
        super();
     
        this.state = {
         
      
        }}
   handleChange=(event)=>
     {
          this.setState(
           
            { [event.target.name]:event.target.value} )  
                        
     }

     add=()=>
     {
        //  const {inputName,inputLastName,inputphone}=this.state
        //  if(inputName==="" && inputLastName==="" && inputphone==="")
        //  return {}
        //  this.props.addReducer(inputName,inputLastName,inputphone)
        //  //pour vider les inputs
        //  this.setState({
        //   inputName:"", 
        //   inputLastName:"",
        //   inputphone:""
        //  })
         axios.post('/add-contact',{...this.state})
       .then(()=>this.props.addContactReducer({...this.state}))
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
                    <Input   name="name" value={this.state.inputName} onChange={this.handleChange} placeholder="Enter Name" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="lastname" sm={2}>LastName</Label>
                <Col sm={10}>
                    <Input name="lastname" value={this.state.inputLastName} onChange={this.handleChange} placeholder=" Enter Last Name" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="Phone Number" sm={2}>Phone Number</Label>
                <Col sm={10}>
                    <Input   name="phone" value={this.state.inputphone} onChange={this.handleChange}  placeholder="Enter Phone Number" />
                </Col>
                </FormGroup>
                </Form>
          </Modal.Body>
          <Modal.Footer className='button-modal'>
          <Link to='./contact-list' ><Button  className='button-modal1'  onClick={() => { this.add(); this.props.onHide();}}>Add</Button></Link>

            <Button  className='button-modal2' onClick={this.props.onHide }>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  const mapDispatchToProps=(dispatch)=>
  {
      return {
          addContactReducer:(newcontact)=>
          {
              dispatch({
                  type:'ADD_CONTACT',
                  newcontact,
                  
              })
          }
      }
  }
export default connect(null,mapDispatchToProps)(ModalAdd);

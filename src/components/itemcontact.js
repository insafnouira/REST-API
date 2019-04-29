import React,{Component} from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap';
import {connect} from 'react-redux'
import axios from 'axios'

import image from './images.png'
import ModalEdit from './editcontact'

import './App.css'
class Item extends Component{
  constructor(props) {
    super(props);
    this.state = { modalShow: false };
}
  deleteContact=()=>
      {  const {item} = this.props
      axios.delete(`/delete-contact/${item._id}`)   
    .then(()=>this.props.deleteReducer(item._id)) 
    .catch((err)=>alert(err)) 
      }
  render(){
    let modalClose = () => this.setState({ modalShow: false });
     const {item} = this.props
  
  return (
    <div>
      <Card  style={{ width: '18rem' }}>
      <CardImg top  className='image' src={image} alt="Card image cap" />

        <CardBody>
  <CardTitle>{<span style={{fontWeight:'bold',color:'grey'} } >Name:</span>} {item.name}</CardTitle>
  <CardSubtitle>{<span style={{fontWeight:'bold',color:'grey'} } > LastName: </span>} {item.lastname}</CardSubtitle>
  <CardText>{<span style={{fontWeight:'bold',color:'grey'} } > Phone : </span> }{item.phone}</CardText>
          <Button className='button-card1' onClick={() => this.setState({ modalShow: true })}>Edit</Button>
          <Button className='button-card2' onClick={this.deleteContact}>Delete</Button>
          <ModalEdit show={this.state.modalShow}
                        onHide={modalClose}/>
        </CardBody>
      </Card>
    </div>
  )
}
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteReducer:id=>
        {
            dispatch({
                type:'DELETE_CONTACT',
                id 

            })
        }
      }
}
export default connect(null,mapDispatchToProps)(Item) ;
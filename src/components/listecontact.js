import React,{Component} from 'react';
import {connect} from 'react-redux'
import Item from './itemcontact';
import axios from 'axios'
import './App.css'


class Liste extends Component {

    componentDidMount=()=>{
        axios.get('/get-contact').then((res)=>this.props.updateContactReducer(res.data))
    }
   render() { 
        const {contacts}=this.props

        return ( <div className='list-app-container'>
              
         {
             contacts.map((el,index)=><Item item={el} key={index} id={index}/>)
         }
        </div> );
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
        updateContactReducer:contacts=>
        {
            dispatch({
                type:'UPDATE_CONTACTS',
                contacts
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Liste);
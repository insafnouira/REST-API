let contacts=[ 
    {
    name: 'insaf',
    lastname:'nouira',
    phone: 234242
},
{
    name: 'hichem',
    lastname:'njahi',
    phone: 3443643
}
]
const reducercontact=(state=contacts,action)=>
{
switch(action.type)
{
case 'ADD_CONTACT' :
return(
     state.concat(action.newcontact)
)

case 'DELETE_CONTACT':
return (
state.filter((el,index)=>index!==action.id)
)
case 'EDIT_CONTACT':
return (
    state.map(el=>el._id===action.editcontact._id? el=action.editcontact:el)
)
case 'UPDATE_CONTACTS':
      return(
          state=action.contacts
      )

default :
return state
}
}
export default reducercontact
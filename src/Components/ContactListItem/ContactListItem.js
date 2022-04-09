import s from './ContactListItem.module.css'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {deleteContact} from '../../redux/actions'

function ContactListItem ({name,number,onDeleteContact,id}){
    return <li  className={s.item}>{name}:{number} 
    <button onClick={()=> onDeleteContact(id)} className={s.button}>delete</button>
    </li> 


}


ContactListItem.propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  const makeDispatchToProps = dispatch =>({
    onDeleteContact: (id) => dispatch(deleteContact(id))
  })

  export default connect(null, makeDispatchToProps)(ContactListItem)
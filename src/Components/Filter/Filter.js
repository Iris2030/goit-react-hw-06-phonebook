import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {changeFilter} from '../../redux/actions'

function Filter({ value, changeFilter }) {
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contact by name</label>
      <input onChange={changeFilter} className={s.input} value={value} type="text" name="filter" />
    </div>
  );
};

Filter.propTypes ={
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  value: state.filter
})

const mapDispatchToProps = dispatch => ({
  changeFilter: (event) => dispatch(changeFilter(event.target.value))
})


export default connect(mapStateToProps,mapDispatchToProps)(Filter)
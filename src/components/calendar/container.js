import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import {saveClickedDay, saveClickedMonth} from "../../ac";

const mapStateToProps = (state) => {
  return {};
};


const Calendar = compose(
  connect(mapStateToProps, {saveClickedMonth, saveClickedDay}),
)(View);

export { Calendar };

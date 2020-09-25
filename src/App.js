import React, {useState} from "react";
import './App.scss';
import {Layout} from './layouts/base';
import { Calendar } from './components/calendar'
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {About} from "./components/about";
import {MyVerticallyCenteredModal} from "./components/modal";
import {connect} from "react-redux";
import calendarState from "./reducer/calendar";

function App(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <BrowserRouter>
      <Layout>
        {modalShow && <MyVerticallyCenteredModal {...props} show={modalShow}
                                   onHide={() => setModalShow(false)}
        />}
        <Switch>
          <Route exact path="/" render={() => <Calendar setModalShow={setModalShow}/>} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default connect(state => ({
  clickedDay: state.calendarState.clickedDay
}))(App);

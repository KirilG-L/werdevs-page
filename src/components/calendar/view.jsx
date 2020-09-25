import React, {useEffect, useState} from "react"
import './style.scss';
import {Col, Container, Row} from "react-bootstrap";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { NavBar } from '../../components/navbar'
import { Weekday } from '../../components/weekday'
import {MyVerticallyCenteredModal} from "../modal";

const View = (props) => {
  const { setModalShow, saveClickedDay } = props;


  const [day, setDay] = useState('');

  useEffect (() => {
    saveClickedDay(day)
  }, [day]);

  const handleDayClick = (day, {selected}) => {
    setDay(selected ? undefined : day);
    setModalShow(true)
  };

  return (
    <Container className={'content'}>
      <Row className={'content-list'}>
        <Col className={'content-list_item'}>
          <div className="content-list_body">
            <div className="content-list_title">
              <span>Choose the day for the meeting</span>
            </div>
            <div className="content-list_text">
              <span>We encourage you to book your appointment online. <br/> This will save you time.</span>
            </div>
          </div>
        </Col>
        <Col className={'content-list_item'}>
          <div className="calendar">
            <div className="calendar-wrapper">
              <DayPicker
                selectedDay={day}
                onDayClick={handleDayClick}
                showOutsideDays
                weekdayElement={<Weekday />}
                navbarElement={<NavBar/>}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export {View};

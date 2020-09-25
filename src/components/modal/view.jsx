import React from 'react'
import {Button, Modal} from "react-bootstrap";
import './style.scss'

function View(props) {
  console.log(props)

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Button onClick={props.onHide} style={{float: 'right',
          backgroundColor: '#FDD000', border: '0'}}>	&#10006;</Button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-list">
          <div className="modal-list-block">
            <span>Month</span>
            <div className="modal-list_item">
              {props.clickedDay&& `${monthNames[props.clickedDay.getMonth()]}`}
            </div>
          </div>
          <div className="modal-list-block">
            <span>Day</span>
            <div className="modal-list_item">

              {props.clickedDay &&`${props.clickedDay.getDate()}th ${days[props.clickedDay.getDay()]}`}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export {View}

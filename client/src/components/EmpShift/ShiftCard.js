import React  from 'react';
// import Date from "./Date";
// import EmpShift from "./EmpShift";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Moment from "react-moment";

const ShiftCard = (props) => {
	return (
		<div className="card">

			<Card>
				{/* {console.log(props)} */}
				<Card.Header>{props.name}</Card.Header>
				<Card.Body>
					{/* <Card.Title>Special title treatment</Card.Title> */}
					<Card.Text>
						<b>Date:</b> <Moment format="MMM-DD-YYYY">{props.date}</Moment><br/>
						<b>Time:</b> {props.start} to {props.end}<br/>
                        <b>Location:</b> {props.location}<br/>
                        <b>Description:</b> {props.description}<br/>
                        <Button variant="outline-success" onClick={() => props.claimShift(props.shiftid)}>CLAIM SHIFT</Button>
					</Card.Text>
				</Card.Body>
			</Card>

		</div>
	);
}



export default ShiftCard;
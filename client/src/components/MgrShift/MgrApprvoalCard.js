import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../../utils/api";

class MgrApprovalCard extends Component{
	state = {
		showconfirm: false,
	};

	approve = (id) =>{
		console.log(id)
	}

	reject = (id) =>{
		console.log(id)
	}

	getShiftData(){
		API.getEmployees("")
		.then(res =>
			{
				console.log(res.data);
				this.setState({ employees: res.data })
			}
			)
		.catch(err => console.log(err));
	}
	// getEmpShiftPending: function (id){
	// 	return axios.get("/api/user/employee/pendingShifts/"+id);
	// }

	render(){
		console.log("Approval Card")
		console.log(this.props.pendingShifts)
		console.log(this.props.pendingShifts.length)
		if (this.props.pendingShifts.length > 0) {
			this.getShiftData()
			.then(()=>{
			return (
				<div className="card">

					<Card id={`${this.props._id}`} >
						<Card.Header>{this.props.firstName} {this.props.lastName}</Card.Header>
						<Card.Body>
							{/* {console.log(this.props.pendingShifts)} */}

							{this.props.pendingShifts.map(
							// console.log(this.state.employees),
							
								(shift, i) => (
									<Card.Text key={i}>
										<b>Shift:</b> {shift}<br/>
										<Button variant="outline-primary" onClick={() => this.approve(shift)}>Approve</Button>
										<Button variant="outline-danger" onClick={() => this.reject(shift)}>Reject</Button>
										<hr/>
									</Card.Text>

									// <MgrApprovalCard
									// 	{...employees} // Breaks out employee data for rendering each card
									// 	key={i} // Gives each card a react key i
									// />
								)
							)}
							{/* {this.props.pendingShifts.each(
								<Card.Text>
									<b>Shift:</b> Test <br/>
								</Card.Text>
							)} */}
							{/* <Button variant="outline-warning" onClick={() => this.deleEmp(this.props._id)}>Remove Employee</Button> */}
						</Card.Body>
						<Card.Footer >
							
						</Card.Footer>
					</Card>

				</div>
			);
			})
		}
		else {return("");}
	}
}

export default MgrApprovalCard;

// REAL DATA
// firstName: "Yating"
// isManager: false
// lastName: "Su"
// location: "745 Vaughan st."
// phoneNumber: "123-456-8080"
// shifts: []
// teamId: "5d77e45fb112c824efae3718"
// username: "employee3@qwe.com"
// __v: 0
// _id: "5d77eb76c1a9c9261d6dabc3"
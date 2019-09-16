import axios from "axios";

export default {

  // getManager: function() {
  //   return axios.get("/api/shifts/5d77e45fb112c824efae3718");
  // }
	getTeam: function(id) {
		console.log(id);
		return axios.get("/api/shifts/"+id);
	},


	// Manager API Calls for Employees
	getEmployees: function(id) {
		// console.log(id);
		return axios.get("/api/user/manager/all/"+id);
	},

	addEmployee: function(newEmp) {
		// console.log(newEmp);
		return axios.post("/api/user/manager/addemployee", newEmp);
	},

	deleEmployee: function(id) {
		// console.log(id);
		return axios.delete("/api/user/manager/deleteuser/" + id);
	},

	// Manager API Calls for Shifts
	addShift: function(newShift) {
		// console.log(newShift);
		return axios.post("/api/shifts/manager/addshift", newShift);
	},

	deleShift: function(id) {
		// console.log(id);
		return axios.delete("/api/shifts/manager/deleteshift/"+id);
	},

	updateShift: function(id) {
		return axios.put("/api/user/employee/claimShift/"+id);
	},


	//Employee API Calls for shifts
	getEmpShift: function (id){
		return axios.get("/api/user/employee/shifts/"+id);
	},

	//Employee API Calls for shifts
	getEmpShiftPending: function (id){
		return axios.get("/api/user/employee/pendingShifts/"+id);
	}


};

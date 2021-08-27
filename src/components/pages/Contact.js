import React from "react";

import '../styles.css';


function Contact(props) {
	return (
		<div className="container moreLeft">
			<h1>Contact </h1>
			<form>
				<div className="mb-3">
					<label for="name"  className="form-label">Name:</label>
					<input type="text" id="name" name="name" className="form-control" />
				</div>
				<div className="mb-3">
					<label for="email" className="form-label" >Email:</label>
					<input type="text" id="email" name="email" className="form-control" />


				</div>
				<div className="mb-3">
					<label for="msg" className="form-label" >Message:</label>
					<input type="text" id="msg" name="message" className="form-control" />
				</div>
				<input type="submit" value="Submit"  className="btn btn-primary" />
			</form>



						
					</div>
					);
}


					export default Contact;

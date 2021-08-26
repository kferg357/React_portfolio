import "./styles.css";
import React from "react";
import github_icon from "./images/github_icon.png";

import linkedin_icon from "./images/linkedin_icon.png";
import email_icon from "./images/email_icon.jpg";
import pdf_icon from "./images/pdf_icon.jpg";
 import Resume from "./images/Ken_Resume_new_new.pdf";

function FooterInfo() {
	return (
		<div className="bg-dark text-white fixed-bottom footer mt-auto py-3">
				<div className="container">
					<div className="row">
							
						<div className="col">
							<p><img className="contactImg" src={pdf_icon} alt="github icon" /><a className="contactLink" href={Resume}>Resume</a></p> 


						</div>
						<div className="col">
							<img className="contactImg" src={github_icon} alt="github icon" /><a className="contactLink" href="https://github.com/kferg357" target="_blank" rel="noreferrer"> Github</a><br />

						</div>

						<div className="col">

							<img className="contactImg" src={linkedin_icon} alt="linkedin icon" /><a className="contactLink" href="https://www.linkedin.com/in/kenneth-ferguson-859810207/" target="_blank" rel="noreferrer"> LinkedIn</a><br />
						</div>
							{/* <p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p> */}

					</div>

					<div className="row"> 
						<span className="text-muted">Built for UNC Coding Bootcamp &bull; Right reserved under the MIT License</span>

					</div>


			</div>
		</div>
	);
}


export default FooterInfo;

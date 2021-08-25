import React from "react";
	import github_icon from "../images/github_icon.png";
	import linkedin_icon from "../images/linkedin_icon.png";
	import email_icon from "../images/email_icon.jpg";
	import pdf_icon from "../images/pdf_icon.jpg";
	import Resume from "../images/Ken_Resume_new_new.pdf";
	

	function Contact(props) {
	  return (
	    <div className="moreLeft">
	      <h1>Contact Me</h1>
	    <p>Feel free to reach out! I look forward to connecting with you.</p>
	   <p><img className="contactImg" src={ pdf_icon } alt="github icon" /><a className="contactLink" href={Resume}>Click here to download my resume</a></p>
	    <img className="contactImg" src={ github_icon } alt="github icon" /><a className="contactLink" href="https://github.com/kferg357" target="_blank" rel="noreferrer"> Github</a><br/>
	    <img className="contactImg" src={ linkedin_icon } alt="linkedIn icon" /><a className="contactLink" href="https://www.linkedin.com/in/kenneth-ferguson-859810207/" target="_blank" rel="noreferrer"> LinkedIn</a><br/>
	    <img className="contactImg" src={ email_icon } alt="email icon" /><a className="contactLink" href="mailto:kennethferguson90@gmail.com">Email me</a>
	    <p>&nbsp;</p>
	    <p>&nbsp;</p>
	    <p>&nbsp;</p>
	    </div>
	  );
	}
	

	export default Contact;

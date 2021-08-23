import React from "react";
	import "../styles.css";
	import facepic from "../images/facepic.jpg";
	

	function Home() {
	  return (
	    <div className="jumbotron jumbotron-fluid"> 
	      <div className="moreLeft"><img className="profile" src={facepic.jpg} alt="facepic" />
	      <p className="headerText">
	     <h1>Hello</h1>  
	      My name is Kenneth A. Ferguson <br/>
	     I am an innovative and deadline-driven Software Developer with experience in designing and developing user-friendly software applications with vast knowledge of debugging problems. Possesing the craft of launching final products that are polished and deliverable.  <br/>
	      </p> 
	    </div>
	    </div>
	  );
	}
	

	export default Home;









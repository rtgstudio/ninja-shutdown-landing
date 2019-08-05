import React from 'react';
import './Card.css';

class Card extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}
	render(){
		return(
			<div className="cardList">
				<div className="card">
					<div className="detail">
						<h2> Automated</h2>
						<p>RTG NINJA AUTO SHUTDOWN allows you to schedule the system shutdown, with ease. You simply need to enter the desired hour and let the application power off the computer while you are already away.
	  		             </p>
	  		        </div>
  		           
				</div>
				<div className="card">
					<div className="detail">
						<h2> Ease</h2>
						<p>You can simply open RTG NINJA AUTO SHUTDOWN,
						 set the desire hour and leave the application to run on the desktop or in the background.</p>   
					</div>
				</div>
				<div className="card">
					<div className="detail">
						<h2>Secure</h2>
						<p>RTG NINJA AUTO SHUTDOWN can run in silent mode, if you click the HIDE button and cannot be found in the System Tray. This option can constitute a reliable security measure, in case your children wish to use the computer</p>
					</div>
				</div>
			</div>
		);
	}
	
}
export default Card;

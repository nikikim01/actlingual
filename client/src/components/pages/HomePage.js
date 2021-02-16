import React, { Component } from "react";
import "./HomePage.css";
import "../../utilities.css";

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div className="HomePage-container">
            <div className="HomePage-quoteBox">
                <h1 className="HomePage-quote">“If you talk to a man in a language he understands, 
                    that goes to his head. If you talk to him in his language, 
                    that goes to his heart.” -Nelson Mandela</h1>
                <img className="HomePage-quoteImg" 
                src="https://storage.googleapis.com/actlingual/mandela.svg"></img>
            </div>

            
            <div className="HomePage-titleBox">
                <h2 className="HomePage-title">About Us</h2>
            </div>

            <h3 className="u-sectionBorder">
                Through partnerships with community organizations, Actlingual, a community
                of multingual and multicultural students, provides aid to citizens of Massachusetts in the 
                Cambridge/Boston area whom may not speak English as their first language. Some of our current
                initiatives include a medical interpreting program and health-oriented community classes along with 
                other committees requiring language skills. 
            </h3>

            <h3 className="u-sectionBorder u-flex u-flex-justifyCenter">Interested in learning more? Have Questions? Contact us at <a style={{textDecoration:'none'}} 
            href="mailto:actlingual-exec@mit.edu">&nbsp;actlingual-exec@mit.edu. </a> </h3> 
            
            <h3 className="u-sectionBorder u-flex u-flex-justifyCenter">Want to join our team? 
            Fill out <a style={{textDecoration:'none'}} 
                href="https://forms.gle/w27eQKaTsphtFEyE6">&nbsp;this form </a>&nbsp;below!</h3>

            <div className="HomePage-titleBox">
                <h2 className="HomePage-title">Current Initiatives</h2>
            </div>

            <div className="u-evenSplit">
                <h3 style={{borderRight:"3px solid", paddingRight: "20vw"}}>AMIC</h3>
                
                <h3>image here</h3>
            </div>
            <div className="u-evenSplit">
                <h3 style={{borderRight:"3px solid", paddingRight: "20vw"}}>image here</h3>
                <h3>CHEDAR</h3>
            </div>
            <div className="u-evenSplit">
                <h3 style={{borderRight:"3px solid", paddingRight: "20vw"}}>AAI Vote</h3>
                <h3>image here</h3>
            </div>
            <div className="u-evenSplit">
                <h3 style={{borderRight:"3px solid", paddingRight: "20vw"}}>image here</h3>
                <div className="HomePage-titleBox">
                <h2 className="HomePage-subtitle">ACC</h2>
            </div>
            </div>
            <div className="HomePage-titleBox">
                <h2 className="HomePage-title">Interested in Starting a New Committee of Your Own?</h2>
            </div>
        </div>
        )};
}

export default HomePage;


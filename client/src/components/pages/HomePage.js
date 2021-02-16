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
                <div className="HomePage-leftInits">
                    <div>
                        <text className="HomePage-subtitle">AMIC</text>
                        <br/>
                        <text className="HomePage-contentText">Actlingual Medical Interpreting Committee (AMIC) is working to design a 
                        medical interpreting class to prepare MIT students to gain the certification and the experience to volunteer as 
                        medical interpreters in various clinical settings in the Boston area.</text>
                    </div>
                    <div>
                        <img style={{height:"25vh", padding: "1vh"}}src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"></img>
                    </div>
                    <div>
                        <text className="HomePage-subtitle">AAI Vote</text>
                        <text className="HomePage-contentText">Asian American Initiative (AAI) Vote translated different voting resources (especially 
                        the Presidential Platforms) in order to provide information about voting to a broader audience in Fall 2020.</text>
                    </div>
                    <div>
                    <img style={{height:"25vh", padding: "1vh"}}src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"></img>
                    </div>
                </div>
                <div className="HomePage-rightInits">
                    <div>
                    <img style={{height:"25vh", padding: "1vh"}}src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"></img>
                    </div>
                    <div>
                    <text className="HomePage-subtitle">CHEDAR</text>
                    <text className="HomePage-contentText">Through community health classes, Community Health, Education, and Resources (CHEDAR) aims to provide health-related information 
                    to targeted audiences within the Boston-area population that would benefit from a greater understanding of such issues.</text>
                    </div>
                    <div>
                    <img style={{height:"25vh", padding: "1vh"}}src="https://storage.googleapis.com/actlingual/comingsoonimage.jpg"></img>
                    </div>
                    <div>
                    <text className="HomePage-subtitle">ACC</text>
                    <text className="HomePage-contentText">Actlingual Committee for Citizenship (ACC) [to be initiated] provides citizenship assistance to immigrants from a wide range of backgrounds, by creating 
                    tutor-student pairings between multilingual MIT students and immigrants looking to take the citizenship interview.</text>
                    </div>
            </div>
            </div>
            <div className="HomePage-titleBox">
                <h2 className="HomePage-title">Interested in Starting a New Committee of Your Own?</h2>
            </div>
        </div>
        )};
}

export default HomePage;


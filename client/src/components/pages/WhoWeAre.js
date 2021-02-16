import React, { Component } from "react";

class WhoWeAre extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>

    <h3 className="u-sectionBorder u-flex u-flex-justifyCenter">Interested in learning more? Have Questions? Contact us at <a style={{textDecoration:'none'}} 
            href="mailto:actlingual-exec@mit.edu">&nbsp;actlingual-exec@mit.edu. </a> </h3> 
            
            <h3 className="u-sectionBorder u-flex u-flex-justifyCenter">Want to join our team? 
            Fill out <a style={{textDecoration:'none'}} 
                href="https://forms.gle/w27eQKaTsphtFEyE6">&nbsp;this form </a>&nbsp;below!</h3>

            <h3 className="u-sectionBorder">Through partnerships with community organizations, Actlingual, a community
                of multingual and multicultural students, provides aid to citizens of Massachusetts in the 
                Cambridge/Boston area whom may not speak English as their first language. Some of our current
                initiatives include a medical interpreting program and health-oriented community classes along with 
                other committees requiring language skills.</h3>
            <h3 className="u-sectionBorder">We are currently working on a curriculum for a medical 
                interpreting class to prepare MIT students to address the critical 
                need for medical interpreters in the MIT/Cambridge/Boston area. Also partnering with the 
                Everett Haitian Community Center and MIT Asian American Initiative, we are working to provide 
                aid to multiple service initiatives in the vicinity.</h3>
        </div>
        )};
}

export default WhoWeAre;


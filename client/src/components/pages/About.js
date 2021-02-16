import React, { Component } from "react";

class AboutPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <h3>“If you talk to a man in a language he understands, that goes to his head. 
                If you talk to him in his language, that goes to his heart.” 
                -Nelson Mandela</h3>
            <h3>When an individual does not speak enough English to fully understand the 
                situation in different health and social settings, they aren’t able to 
                fully communicate or make well-informed decisions. MIT ActLingual members 
                bridge this gap by connecting multilingual/multicultural students with 
                opportunities in the MIT/Boston/Cambridge area to use their language 
                skills to aid the lives of people in the communities around MIT.</h3>
            <h3>The Actlingual team is currently working on a curriculum for a medical 
                interpreting class to prepare MIT students to address the critical 
                need for medical interpreters in the MIT/Cambridge/Boston area. We are 
                also partnered with the Everett Haitian Community Center and MIT Asian 
                American Initiative to provide aid to multiple service initiatives in 
                the Boston/Cambridge area.</h3>
        </div>
        )};
}

export default AboutPage;


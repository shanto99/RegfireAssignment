import React from 'react';

import {Subject} from './../api/subjects';

import {Student} from './../api/students';

export default class ShowStudent extends React.Component {

    renderStudent(){
        return this.props.students.map((student)=>{
            try{
                let subject = Subject.find({_id:student.subject}).fetch()[0].name;
                return <p class = "student_paragraph">{student.name} got the Subject: {subject} || <button onClick={()=>{
                    Student.remove({_id:student._id});
                }}>Delete</button></p>
            }catch(err){

            }
            
        });
    }
    render(){
        return (
        <div>
            {this.renderStudent()}
        </div>
        )
    }
}
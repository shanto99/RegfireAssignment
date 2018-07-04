import React from 'react';

import {Subject} from './../api/subjects';


export default class AddSubject extends React.Component {
    renderSubjects(){
        return this.props.subjects.map((subject)=>{
            return <p>{subject.name} || <button onClick = {()=>{Subject.remove({_id:subject._id})}}>X</button></p>
        })
    }

    handleSubmit(e) {
        e.preventDefault();
       let sub_name = e.target.subjectName.value;
       e.target.subjectName.value = '';
       Subject.insert({
        name: sub_name
       });
       
        
    }
    render(){
        return (
            <div>
        <form onSubmit = {this.handleSubmit}>
            <div class="form-group">
                <label for="subjectName">Subject Name: </label>
                <input type="text" class="form-control" name = "subjectName" id="subjectName" placeholder="Subject Name Here"/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Save Subject</button>
        </form>
        <h4>All Subjects List</h4>
        <hr/>
        {this.renderSubjects()}
        </div>
        )
    }
}
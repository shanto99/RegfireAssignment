import React from 'react';

import {Student} from './../api/students';

export default class AddStudent extends React.Component {
    
    renderSubjects() {
       return  this.props.subjects.map((subject)=>{
            return <option value = {subject._id}>{subject.name}</option>
        });
    }
    handleSubmit(e) {
      e.preventDefault();
      
      let student_name = e.target.studentName.value;
      let sub = e.target.studentSubject.value;

      e.target.studentName.value = '';
      document.getElementById('subjectList').selectedIndex = 0;
      if(student_name){
        Student.insert({
          name: student_name,
          subject: sub
        });
      }
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
            <div class="form-group">
              <label for="studentName">Student's Name: </label>
              <input type="text" class="form-control" name = "studentName" id="studentName" placeholder="Student Name Here"/>
            </div>
            <div class="form-group">
              <label for="subjectList">Select Subject: </label>
              <select id="subjectList" name = "studentSubject" class="form-control" required>

                <option disabled selected>--Select a subject--</option>
                {this.renderSubjects()}
              </select>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Save Student</button>
          </form>
        )
    }
}
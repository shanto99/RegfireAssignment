import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import AddStudent from './../imports/Components/AddStudentComponent';
import AddSubject from './../imports/Components/AddSubjectComponent';
import StudentSubject from './../imports/Components/StudentSubjectComponent';

import {Subject} from './../imports/api/subjects';

import {Student} from './../imports/api/students';

import './main.html';


Meteor.startup(function() {
  

Tracker.autorun(function (){
  let subjects = Subject.find().fetch();
    let jsx_add_student = <div>
  <AddStudent subjects = {subjects}/>
</div>
  ReactDOM.render(jsx_add_student, document.getElementById('add-student'));
});


   Tracker.autorun(function (){
    let allSubjects = Subject.find().fetch();
    let jsx_add_subject = <div>
    <AddSubject subjects = {allSubjects}/>
  </div>
   ReactDOM.render(jsx_add_subject, document.getElementById('add-subject'));
  });

   Tracker.autorun(function (){

    let students = Student.find().fetch();
      let jsx_show_student = <div>
    <StudentSubject students = {students}/>
  </div>
    ReactDOM.render(jsx_show_student, document.getElementById('student-list-container'));
  });

});


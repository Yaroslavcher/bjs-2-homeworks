"use strict";
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  }

let student3 = new Student("Иван", "мужской", 18);
let student4 = new Student("Марья", "женский", 17);
let student5 = new Student("Ольга", "женский", 19);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (this.excluded === undefined) {
    this.marks.push(...marks);
  }
}
  
Student.prototype.getAverage = function() {
  if (this.marks === undefined || this.marks === []) {
    return 0;
  } else {
      return this.marks.reduce((accum, current) => accum + current, 0) / this.marks.length;
  }    
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

class Student{
    constructor(name,points,grade){
        this.name = name;
        this.points = points;
    }

}

const s1 = new Student("Efren",900);
const s2 = new Student("Estephanie",850);
const s3 = new Student("Elena",980);
const s4 = new Student("Erik",500);
const s5 = new Student("Vicky",949);

const students = [s1,s2,s3,s4,s5];
var SumAllValues = 0;

for(x=0; x<students.length; x++){
    alert("Student: " + students[x].name  + "\n" + "Points: " + students[x].points  );
    SumAllValues = SumAllValues + students[x].points;
}

var Average = SumAllValues / students.length;

alert("The Average for all Students is: " + Average);


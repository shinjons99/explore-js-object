const student ={
    name: 'Rose',
    Money: 6000,
    study: 'English',
    subjects:['Calculus', 'Algebra', 'Geometry'],
    Exam: function(){
        return this.name +  'Is participating in a exam'
    },
    improveExam: function(subject){
        this.Exam();
        return`${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.Money = this.Money - amount - tips;
        return this.Money;
    }
};

const output = student.Exam();
console.log(output);
const reExam = student.improveExam('Algebra');
console.log(reExam);

const remaining = student.treatDay(900, 100);
console.log(remaining);

const dolaRemaining = student.treatDay(500, 50);
console.log(dolaRemaining);
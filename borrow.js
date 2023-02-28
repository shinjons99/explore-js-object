const rose ={
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
}
const result = rose.Exam();

const badamAli ={
    name:'kacha badam',
    money: 8000

};

const result2 = rose.Exam.call(badamAli);
// console.log(result2);

const badamMoney = rose.treatDay.call(badamAli, 400, 40);
// console.log(badamMoney);

const badamMoney2 = rose.treatDay.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamAliTreat = rose.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);
const rose ={
    name: 'Rose',
    Money: 6000,
    study: 'English',
    subjects:['Calculus', 'Algebra', 'Geometry'],
    Exam: function(){
        return this.name +  'Is participating in a exam'
    },
    examArrow: () =>{
        console.log(this);
    },
    examNested: ()=>{
        const arrow = () => {
            console.log(this);
        }
        arrow();
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
rose.Exam();

const badamAli ={
    name: 'kacha badam ali'
}

function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})
const correctAnswer =['A','B','B','C','C','C','A','B','C','A','A'];
const form=document.querySelector('.quiz-form');
const result =document.querySelector('.result');


form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];

    // Checking answer

    userAnswer.forEach((answer,index)=>{
         if(answer==correctAnswer[index]){
             score+=10;
         };
    });
    //console.log(score);

    //show result on pageresult.classList.remove('d-none');
    result.classList.remove('d-none');
    scrollTo(0,0);
    let output=0;
    const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;
    
        if(output==score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },20);
    
});

//Window Object(global object)
// console.log('hellow')
// window.console.log('hello');

// setTimeout(()=>{
//     alert("let's Quiz !");
// },4000);

// let i=0;
// const timer =setInterval(()=>{
//     console.log('Hello');
//     i++;
//     if(i==1000){
//         clearInterval(timer);
//     }
// },5);
var quizdata=[
    {
        question:'Which framework is related to JS',
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct:'c'
    },
    {
        question:'Which is not a programming language',
        a:'HTML',
        b:'Python',
        c:'Java',
        d:'django',
        correct:'a'
    },
    {
        question:'Which is not a Framework',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b'
    },
    {
        question:'CSS stands for',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascadin sheet of style',
        d:'none',
        correct:'b'
    }
]

var quiz= document.getElementById("quiz");
var answer= document.querySelectorAll(".answer");
var question = document.getElementById("question");
var optiona=document.getElementById("A_value");
var optionb=document.getElementById("b_value");
var optionc=document.getElementById("c_value");
var optiond=document.getElementById("d_value");
var submitbtn= document.getElementById("submit");
var currentquestion=0;
var Quizscore=0;
loadQuiz();

function loadQuiz()
{
   deselect();

   question. innerHTML= quizdata[currentquestion].question;
   optiona.innerHTML=quizdata[currentquestion].a;
   optionb.innerHTML=quizdata[currentquestion].b;
   optionc.innerHTML=quizdata[currentquestion].c;
   optiond.innerHTML=quizdata[currentquestion].d;

}
function deselect(){
    answer.forEach(answer=> answer.checked=false)
}
submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption = answer.id;
        }
    });
    if(selectedoption==quizdata[currentquestion].correct)
    {
        Quizscore=Quizscore+1;
    }
    currentquestion=currentquestion+1;
    if(currentquestion==quizdata.length){

        document.getElementById('quizdiv').innerHTML=`<h1> You have answered ${Quizscore} correctly out of ${quizdata.length}`
    }else{
        loadQuiz();
    }
    
});
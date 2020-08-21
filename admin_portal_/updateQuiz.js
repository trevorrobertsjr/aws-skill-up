console.log('starting function');

let formdata = [];
const addquestion = (ev)=>{
    ev.preventDefault();  //to stop the form submitting


    let QuestionObj = {
        question: document.getElementById('question').value,
        correct_answer: document.getElementById('correct_answer').value,
        incorrect_answer: document.getElementById('incorrect_answer').value
    }

    formdata.push(QuestionObj);
    document.forms[0].reset(); 
    // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes
   console.warn('added' , {formdata} );
   let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(formdata, '\t', 2);


}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addquestion);
});

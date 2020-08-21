console.log('starting function');
            
let content = [];
const addcontent = (ev)=>{
    ev.preventDefault();  //to stop the form submitting

    let mondayTip = {
        day: 'monday',
        tip: document.getElementById('mon').value,
    }
    let tuesdayTip = {
        day: 'tuesday',
        tip: document.getElementById('tue').value,
    }  
    let wednsdayip = {
        day: 'wednsday',
        tip: document.getElementById('wed').value,
    }  
    let thurdayTip = {
        day: 'thursday',
        tip: document.getElementById('thurs').value,
    }  
    let fridaytip = {
        day: 'friday',
        tip: document.getElementById('fri').value,
    }


    content.push(mondayTip);
    content.push(tuesdayTip);
    content.push(wednsdayTip);
    content.push(thursdayTip);
    content.push(fridayTip);

    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
   console.warn('added' , {content} );
  let pre = document.querySelector('#msg pre');
 pre.textContent = '\n' + JSON.stringify(content, '\t', 2);

    //saving to localStorage
  //  localStorage.setItem('MyMovieList', JSON.stringify(movies) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addcontent);
});
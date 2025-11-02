let addList=[];
let todonum=0;
const btn=document.getElementById('addTaskBtn');
const text=document.getElementById('iputarray');
const output=document.getElementById('output');
btn.addEventListener('click',()=>{
    let taskList = {};
    taskList.input=text.value;
    addList.push(taskList);
    output.innerHTML += `<div class="hi">${taskList.input}</div>`;
    text.value='';
    document.getElementById('chill').style.display='none';
});
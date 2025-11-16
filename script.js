let addList = [];
let todonum = 0;
const btn = document.getElementById("addTaskBtn");
const text = document.getElementById("iputarray");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  let taskList = {};
  taskList.input = text.value;
  addList.push(taskList);
  todonum++;
  output.innerHTML += `
    <div class="hi">
      <span class="num">${todonum}:</span>
      <span class="text">${taskList.input}</span>
    </div>
  `;
  /* output.innerHTML += `<div class="hi"> ${taskList.input}</div>`;
  outnum.innerHTML += `<div class="hi">${todonum}:`;*/
  text.value = "";

  document.getElementById("chill").style.display = "none";
});

const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

addBtn.addEventListener('click', () => {
    const taskName = prompt("نام کار:");
    const taskDesc = prompt("توضیح مختصر:");
    const taskDate = prompt("تاریخ اتمام تقریبی (YYYY-MM-DD):");

    if(taskName) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h4>${taskName}</h4>
            <p>${taskDesc}</p>
            <p>تاریخ اتمام: ${taskDate}</p>
            <button class="doneBtn">Done</button>
            <button class="delayBtn">Delay</button>
        `;
        document.getElementById('empty1').style.display = 'none';
        const doneBtn = card.querySelector('.doneBtn');
        const delayBtn = card.querySelector('.delayBtn');

        doneBtn.addEventListener('click', () => {
            doneList.appendChild(card);
            doneBtn.remove();
            delayBtn.remove();
            alert("آفرین! کارت رو انجام دادی!");
            document.getElementById('empty2').style.display = 'none';
            
        });

        delayBtn.addEventListener('click', () => {
            alert("می‌تونی این کار رو به بعدا موکول کنی یا زمانش رو تغییر بدی!");
        });

        todoList.appendChild(card);
    }
});

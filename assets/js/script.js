//esercizio uno
const saveUser = document.getElementById('saveUser');
const newName = document.getElementById('name');
const savebtn = document.getElementById('saveName');
const removebtn = document.getElementById('removeName');



function SavedName() {
    const savedName =localStorage.getItem('userName');
    if(savedName) {
        return saveUser.innerText= `Ciao, ${savedName}` 
    } else {
        return saveUser.innerText = 'No data';
    }
}

function btnSave() {
    const btnname = newName.value;
    if (btnname) {
        localStorage.setItem('userName', btnname);
        SavedName();
    } else {
        return
    }
}

function btnRemove() {
    localStorage.removeItem('userName');
    SavedName();
}

savebtn.addEventListener('click', btnSave);
removebtn.addEventListener('click', btnRemove);

SavedName();

//esercizio due
const counterText =document.getElementById('counter');
function Counter() {
    let count=parseInt(sessionStorage.getItem('counter') || '0',10);

    setInterval (() => {
        count++;
        sessionStorage.setItem('counter', count);
        counterText.textContent= count;
    },1000);
}
Counter();
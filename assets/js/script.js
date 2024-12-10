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
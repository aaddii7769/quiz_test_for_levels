const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addEditNote() {
    if (inputBox.value === '') {
        alert("Note cannot be empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<span>${inputBox.value}</span> <button onclick="editNote(this)">Edit</button> <button onclick="deleteNote(this)">Delete</button>`;
        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

function editNote(button) {
    let li = button.parentElement;
    let noteText = li.querySelector("span").innerText;
    let editedNote = prompt("Edit your note:", noteText);
    if (editedNote !== null) {
        li.querySelector("span").innerText = editedNote;
        saveData();
    }
}

function deleteNote(button) {
    let li = button.parentElement;
    li.remove();
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
       
    } else if (e.target.tagName === "BUTTON") {
       
    }
}, false);

function saveData() {
    localStorage.setItem("notesData", listContainer.innerHTML);
}

function showNotes() {
    listContainer.innerHTML = localStorage.getItem("notesData");
}

showNotes();
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    const notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.addEventListener("keyup", () => {
            updateStorage();
        });
    });
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contentEditable", "true");
    img.src = "images/delete.png";
    inputbox.appendChild(img);
    notesContainer.appendChild(inputbox);
    updateStorage(); // Call updateStorage after adding a new note

    inputbox.addEventListener("keyup", () => { // Add event listener to the new note
        updateStorage();
    });
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Call showNotes on page load to display stored notes
showNotes();

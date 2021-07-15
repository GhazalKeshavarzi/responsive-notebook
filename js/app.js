//variabels
const divlist = document.querySelector('#divlist');





//eventlisteners
eventListeners();
function eventListeners() {
    document.querySelector('#form').addEventListener('submit',addNote);
}






//functions
function addNote(e) {
    e.preventDefault();

    //access to the notes
    const note = document.querySelector('#notebook').value
    
    //add texts to the li (create li)
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(note));

    //add li to the div list
    divlist.appendChild(li);
}
//variabels
<<<<<<< HEAD


=======
>>>>>>> dec23a1eafa90157f2fb38be526d140acba57083
const divlist = document.querySelector('#divlist');





//eventlisteners
<<<<<<< HEAD


eventListeners();
function eventListeners() {
    //form sybmission
    document.querySelector('#form').addEventListener('submit',addNote);
    //delete li
    document.querySelector('#divlist').addEventListener('click',deleteNote);
    //show note from local storage on load
    document.addEventListener('DOMContentLoaded', showNoteFromLS);

=======
eventListeners();
function eventListeners() {
    document.querySelector('#form').addEventListener('submit',addNote);
>>>>>>> dec23a1eafa90157f2fb38be526d140acba57083
}






//functions
<<<<<<< HEAD


//................ add note to list........................
=======
>>>>>>> dec23a1eafa90157f2fb38be526d140acba57083
function addNote(e) {
    e.preventDefault();

    //access to the notes
    const note = document.querySelector('#notebook').value
    
    //add texts to the li (create li)
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(note));

    //add li to the div list
    divlist.appendChild(li);
<<<<<<< HEAD

    //create remove button for li
    const removeBtn=document.createElement('a');
    removeBtn.textContent='x';
    removeBtn.classList='removebtn';

    //add remove button to the li
    li.appendChild(removeBtn);


    addNoteToLS(note);

}



//................ remove note from list........................
function deleteNote(e) {
    if (e.target.classList.contains('removebtn')) {
        e.target.parentElement.remove();   
    }
}

//................ add note to local storage........................
function addNoteToLS(note) {

    //get notes from local storage
     const notes=getNoteLS();

     //add notes to notes array
      notes.push(note);

      //add array note to the local storage
      localStorage.setItem('notes',JSON.stringify(notes));
}

//................ get note from local storage ........................
    function getNoteLS() {
        let notes;

        //get note from local storage
        let getNote=localStorage.getItem('notes');
        if (getNote===null) {
            //if not exist create an empty array
            notes=[];
        } else {
            //if exist convert it to array 
            notes=JSON.parse(getNote);
        }
        return notes;
    }

//................ get data from local storage on load ........................  
    function showNoteFromLS() {
        const notes=getNoteLS();
        notes.forEach( function(note) {
        // create remove element
        const removeBtn = document.createElement('a')
        removeBtn.textContent = 'X'
        removeBtn.classList = 'removebtn'
        
        // create <li> tag
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(note))

        // adding remove btn to the li
        li.appendChild(removeBtn)

        // adding li to the note-list
        divlist.appendChild(li);
         
        });
    }


=======
}
>>>>>>> dec23a1eafa90157f2fb38be526d140acba57083

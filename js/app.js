//variabels
const divlist = document.querySelector('#divlist');





//eventlisteners

eventListeners();
function eventListeners() {
    //form sybmission
    document.querySelector('#form').addEventListener('submit',addNote);
    //delete li
    document.querySelector('#divlist').addEventListener('click',deleteNote);
    //show note from local storage on load
    document.addEventListener('DOMContentLoaded', showNoteFromLS);

}





//functions


//................ add note to list........................
function addNote(e) {
    e.preventDefault();

    //access to the notes
    const note = document.querySelector('#notebook').value
    
    //add texts to the li (create li)
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(note));

    //add li to the div list
    divlist.appendChild(li);

    //create remove button for li
    const removeBtn=document.createElement('a');
    removeBtn.textContent='x';
    removeBtn.classList='removebtn';

    //add remove button to the li
    li.appendChild(removeBtn);

    this.reset();

    addNoteToLS(note);

    alert("your note saved succesfully")

}



//................ remove note from list........................
function deleteNote(e) {
    if (e.target.classList.contains('removebtn')) {
        e.target.parentElement.remove();   
    }
    //also delete content from localstorage
    deleteNoteFromLS(e.target.parentElement.textContent);
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



//................ delete content from localstorage .......................  
    function deleteNoteFromLS(notecontent) {
        const notedelete=notecontent.substring(0,notecontent.length-1);
        const noteLS=getNoteLS();
        
        noteLS.forEach(function(note,index) {
            if (note === notedelete) {
                noteLS.splice(index,1);
            }
        });
        //set new array to localstorage
        localStorage.setItem('notes',JSON.stringify(noteLS))

        console.log(notedelete);
        console.log(noteLS);
    }
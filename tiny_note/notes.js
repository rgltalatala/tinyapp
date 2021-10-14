let notes = [];

const generateNotes = () => {
    const localStore = window.localStorage;
    const notebook = document.createElement('div');
    notebook.id = "notebook"
    // notebook.style.color = appList[0].color;
    notebook.style.width = '500px';
    notebook.style.height = '500px';
    notebook.style.border = '4px solid lightgreen'

    const options = document.getElementById('options')

    const formatNote = note => {
        let formattedNote = document.createElement('div');
        formattedNote.id = note.id;
        formattedNote.innerHTML = note.text;
        formattedNote.className = 'note';

        return formattedNote;
    }

    const renderNotes = () => {
        const saved = localStorage.getItem('notes')
        if (saved){
            let savedNotes = JSON.parse(saved);
            savedNotes.forEach(note => {
                let formattedNote = formatNote(note);
                notebook.append(formattedNote);
            })
        }
    }

    const addNote = text => {
        const note = {
            id: Date.now(),
            text: text
        }

        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes))
        let formattedNote = formatNote(note);
        notebook.append(formattedNote)

        renderNotes();
    }

    

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = "text"
    input.placeholder = "ur note here"
    const button = document.createElement('button');
    button.innerHTML = "Submit"

    form.addEventListener('submit', e => {
        e.preventDefault();

        const text = input.value.trim();
        addNote(text)
        input.value = ''
    })

    form.append(input);
    form.append(button);

    display.append(notebook);
    options.append(form);
}

// document.addEventListener("DOMContentLoaded", generateNotes)

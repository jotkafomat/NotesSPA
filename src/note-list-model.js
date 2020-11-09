class NoteList {

  constructor() {
    this.notes = []
  }

  showNotes(){
    return this.notes
  }

  createNote(string){
    var note = new Note(string);
    this.notes.push(note);
  }

}

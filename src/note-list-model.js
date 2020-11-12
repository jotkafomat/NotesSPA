class NoteList {

  constructor() {
    this.notes = []
    this.id = 0
  }

  all(){
    return this.notes;
  }

  createNote(string) {
    var note = new Note(string, this.id);
    this.notes.push(note);
    this.id += 1
  }

}

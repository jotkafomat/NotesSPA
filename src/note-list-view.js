class NoteListView {

  constructor(noteList){
    this.noteList = noteList;
  }

  htmlString(noteList){
    var openTag = "<ul>"
    var closingTag ="</ul>"

    var body = this.noteList
      .all()
      .map(note => "<li><div>" + note.showText() + "</div></li>")
      .join("")

    return openTag + body + closingTag;
  }
}

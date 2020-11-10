class NoteListView {

  constructor(noteList){
    this.noteList = noteList;
  }

  htmlString(noteList){
    var openTag = "<ul>"
    var closingTag ="</ul>"

    var body = this.noteList
      .all()
      .map(text => "<li><div>" + text.showText() + "</div></li>")
      .join("")

    return openTag + body + closingTag;
  }
}

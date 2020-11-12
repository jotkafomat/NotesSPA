class NoteListView {

  constructor(noteList){
    this.noteList = noteList;
  }

  htmlString(){
    var openTag = "<ul>"
    var closingTag ="</ul>"

    var body = this.noteList
      .all()
      .map(text => "<li><div>" + text.showText().slice(0, 20) + "</div></li>")
      .join("")

    return openTag + body + closingTag;
  }
}

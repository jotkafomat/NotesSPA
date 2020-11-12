class NoteListView {

  constructor(noteList){
    this.noteList = noteList;
  }

  htmlString(){
    var openTag = "<ul>"
    var closingTag ="</ul>"

    var body = this.noteList
      .all()
      .map(text => `<li><a href="#notes/${text.id}">` + text.showText().slice(0, 20) + "</a></li>")
      .join("")

    return openTag + body + closingTag;
  }
}

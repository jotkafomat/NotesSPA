class SingleNoteView {
  constructor(note){
    this.note = note
  }

  singleHtmlString(){
    return "<div>" + this.note.showText() + "</div>";
  }
}
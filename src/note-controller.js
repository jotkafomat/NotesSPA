
class NoteController{
  constructor(noteList) {

    this.noteList = new NoteList();
    this.noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);

  }

  getsHtml() {
    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.htmlString();

  }
}
// let myNoteController = new NoteController();
// myNoteController.getsHtml();

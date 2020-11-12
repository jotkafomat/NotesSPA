
class NoteController{
  constructor(noteList = new NoteList(), noteListViewClass = NoteListView) {

    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new noteListViewClass(this.noteList);

  }

  getsHtml() {
    var element = document.getElementById('app');
    return element.innerHTML = this.noteListView.htmlString();
  }
}
let myNoteController = new NoteController();
myNoteController.getsHtml();


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

makeUrlChangeShowNoteForCurrentPage();

 function makeUrlChangeShowNoteForCurrentPage() {
   window.addEventListener("hashchange", showNoteForCurrentPage);
 };

 function showNoteForCurrentPage() {
   showNote(getNoteFromUrl(window.location));
 };

 function getNoteFromUrl(location) {
   return location.hash.split("/")[1];
 };

 function showNote(id) {
   var noteToShow = myNoteController.noteList.notes.filter(note => note.id == id)[0];
   var singleNoteView = new SingleNoteView(noteToShow)
   var singleNoteViewHTML = singleNoteView.singleHtmlString()
   document.getElementById('app').innerHTML = singleNoteViewHTML;
 };

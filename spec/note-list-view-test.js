(function(exports) {

  function testHtmlString() {
    var noteList = new NoteList();
    noteList.createNote("test");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.htmlString() === "<ul><li><div>test</div></li></ul>")
  }

  testHtmlString();
})(this);

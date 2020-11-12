(function(exports) {

  function testHtmlString() {
    var noteList = new NoteList();
    noteList.createNote("test");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.htmlString() === "<ul><li><div>test</div></li></ul>")
  };

  function returnsFirstTwentyOnly(){
    var noteList = new NoteList();
    noteList.createNote("I am longer than twenty characters");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.htmlString() === "<ul><li><div>I am longer than twe</div></li></ul>")
  };

  testHtmlString();
  returnsFirstTwentyOnly();
})(this);

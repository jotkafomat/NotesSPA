(function(exports) {

  function testHtmlString() {
    var noteList = new NoteList();
    noteList.createNote("test");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.htmlString() === `<ul><li><a href="#notes/0">test</a></li></ul>`)
  };

  function returnsFirstTwentyOnly(){
    var noteList = new NoteList();
    noteList.createNote("I am longer than twenty characters");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.htmlString() === `<ul><li><a href="#notes/0">I am longer than twe</a></li></ul>`)
  };

  testHtmlString();
  returnsFirstTwentyOnly();
})(this);

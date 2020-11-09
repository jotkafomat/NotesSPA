(function(exports) {

  function testNoteListStartWithEmpty() {

    var noteList = new NoteList();

    assert.isTrue(!noteList.notes.lenght);
  };

  function testCreatesNoteItAddsNewNoteToNoteList() {

    var noteList = new NoteList();
    var note = new Note();

    noteList.createNote("Test");

    assert.isTrue(noteList.notes[0].text == "Test");
  };

  testNoteListStartWithEmpty();
  testCreatesNoteItAddsNewNoteToNoteList();
})(this);

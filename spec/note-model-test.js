(function(exports) {


  function testTextNoteDefaultText() {
    var note = new Note();
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  function testShowText() {
    var note = new Note();
    assert.isTrue(note.showText() === "My favourite language is JavaScript");
  };

  function noteInitializeWithID() {
    var note = new Note("Test text", 0);

    assert.isTrue(note.id === 0);

    console.log("noteInitializeWithID Green");
  }

  noteInitializeWithID();
  testShowText();
  testTextNoteDefaultText();
})(this);

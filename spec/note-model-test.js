(function(exports) {
  function testTextNoteDefaultText() {
    var note = new Note();
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  testTextNoteDefaultText();
})(this);

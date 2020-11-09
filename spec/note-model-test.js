(function(exports) {


  function testTextNoteDefaultText() {
    var note = new Note();
    assert.isTrue(note.text === "My favourite language is JavaScript");
  };

  function testShowText() {
    var note = new Note();
    assert.isTrue(note.showText() === "My favourite language is JavaScript");
  };



  testTextNoteDefaultText();
})(this);

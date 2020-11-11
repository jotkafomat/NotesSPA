(function(exports) {

  function testNoteControllerCanBeInstantiated() {
    var noteController = new NoteController();

    assert.isTrue(noteController instanceof NoteController);
    console.log("NoteControllerCanBeInstantiated Green");
  }


  testNoteControllerCanBeInstantiated();
  })(this);

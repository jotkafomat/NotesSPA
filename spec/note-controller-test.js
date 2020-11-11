(function(exports) {

  function testNoteControllerCanBeInstantiated() {
    var noteController = new NoteController();

    assert.isTrue(noteController.constructor.name === 'NoteController');
    console.log("NoteControllerCanBeInstantiated Green");
  }


  testNoteControllerCanBeInstantiated();
  })(this);

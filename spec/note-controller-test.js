(function(exports) {

  class DoubleNotelist {
    createNote() {
    }

  }

  class DoubleNotelistView {
    htmlString() {
      return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
    }
  }



  function testNoteControllerCanBeInstantiated() {

    var doubleNoteList = new DoubleNotelist();
    var doubleNotelistView = new DoubleNotelistView();
    var noteController = new NoteController(doubleNoteList);

    assert.isTrue(noteController instanceof NoteController);
    console.log("NoteControllerCanBeInstantiated Green");
  }

  function testGetsHtml() {
    var doubleNoteList = new DoubleNotelist();

    var noteController = new NoteController(doubleNoteList);

    var doubleNotelistView = new DoubleNotelistView();



    assert.isTrue(noteController.getsHtml() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>" )

    console.log("testGetsHtm Green");
  }

  testGetsHtml();
  testNoteControllerCanBeInstantiated();
  })(this);

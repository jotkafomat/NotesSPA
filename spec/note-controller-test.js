(function(exports) {

  class DoubleNotelist {
    createNote() {
    }

  }

  class DoubleNotelistView {
    constructor(notelist){
      this.noteList = notelist;
    }
    htmlString() {
      return `<ul><li><a href="#notes/0">Favourite drink: seltzer</a></li></ul>`
    }
  }

  function testNoteControllerCanBeInstantiated() {

    var doubleNoteList = new DoubleNotelist();
    var noteController = new NoteController(doubleNoteList, DoubleNotelistView);

    assert.isTrue(noteController instanceof NoteController);
    console.log("NoteControllerCanBeInstantiated Green");
  }

  function testGetsHtml() {
    var doubleNoteList = new DoubleNotelist();

    var noteController = new NoteController(doubleNoteList, DoubleNotelistView);
    assert.isTrue(noteController.getsHtml() === `<ul><li><a href="#notes/0">Favourite drink: seltzer</a></li></ul>` )
    console.log("testGetsHtm Green");
  }

  function changesHash() {
    var fakeClick = function (elem) {
      var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
    
    }
    fakeClick()
    var path = document.URL.split("#")[1];
    assert.isTrue(path === "notes/0");
  }

  testGetsHtml();
  testNoteControllerCanBeInstantiated();
  changesHash();
  })(this);

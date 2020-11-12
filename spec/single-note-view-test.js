(function (exports) {

  class DoubleNote{
    showText(){
      return "I am a note"
    };
  };

  var doubleNote = new DoubleNote();

  function singleNoteViewCanBeInstantiated(){
    var singleNoteView = new SingleNoteView(doubleNote);
    assert.isTrue(singleNoteView instanceof SingleNoteView)
  };

  function canReturnHtmlString(){
    var singleNoteView = new SingleNoteView(doubleNote);
    assert.isTrue(singleNoteView.singleHtmlString() === "<div>I am a note</div>")
  };

  singleNoteViewCanBeInstantiated()
  canReturnHtmlString()
})(this);
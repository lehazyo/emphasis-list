function EmphasisApplication() {
  this.copy_immediately = false;

  this.letters = document.querySelectorAll(".letters__item");
  for(var i=0;i<this.letters.length;i++) {
    this.letters[i].addEventListener("click", this.clickLetter.bind(this));
  }

  this.text_input = document.getElementById("text");
  this.text_input.focus();
}

EmphasisApplication.prototype = Object.create(EmphasisApplication.prototype);
EmphasisApplication.prototype = {
  clickLetter: function(e) {
    var target = e.target;
    var letter = target.textContent;
    this.addLetter(letter);
  },

  addLetter: function(letter) {
    //IE support
    if (document.selection) {
        this.text_input.focus();
        sel = document.selection.createRange();
        sel.text = letter;
    }
    //MOZILLA and others
    else if (this.text_input.selectionStart || this.text_input.selectionStart == '0') {
        var startPos = this.text_input.selectionStart;
        var endPos = this.text_input.selectionEnd;
        this.text_input.value = this.text_input.value.substring(0, startPos)
            + letter
            + this.text_input.value.substring(endPos, this.text_input.value.length);
        this.text_input.selectionStart = startPos + letter.length;
        this.text_input.selectionEnd = startPos + letter.length;
    } else {
        this.text_input.value += letter;
    }
    this.text_input.focus();
  }
};

var emphasis_app = new EmphasisApplication();
function EmphasisApplication() {
  this.letters = document.querySelectorAll(".letters__item");
  for(var i=0;i<this.letters.length;i++) {
    this.letters[i].addEventListener("click", this.clickLetter.bind(this, this.letters[i]));
  }
}

EmphasisApplication.prototype = Object.create(EmphasisApplication.prototype);
EmphasisApplication.prototype = {
  clickLetter: function(element, context) {
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }
};

var emphasis_app = new EmphasisApplication();
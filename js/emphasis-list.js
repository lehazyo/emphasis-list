class EmphasisApplication {
  constructor() {
    this.symbol_input = document.getElementById("symbol");
    this.letters = document.querySelectorAll(".letters__item");
    for(var i=0;i<this.letters.length;i++) {
      this.letters[i].addEventListener("click", this.clickLetter.bind(this, this.letters[i]));
    }

    this.setSymbolInputEvents();
  }

  clickLetter(element, context) {
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

  setSymbolInputEvents() {
    this.symbol_input.addEventListener("input", this.handleSymbolInput.bind(this));
    this.symbol_input.addEventListener("keydown", this.handleSymbolInput.bind(this));
  }

  handleSymbolInput(e) {
    if(this.symbol_input.value) {
      var temp_value = this.symbol_input.value;
      temp_value = temp_value.replace(/\u0301/ig, "");
      temp_value += '\u0301';
      this.symbol_input.value = temp_value;
      this.symbol_input.select();
    }
  }
}

var emphasis_app = new EmphasisApplication();
class Note {
  constructor(text = "My favourite language is JavaScript", id) {
    this.text = text
    this.id = id
  }

  showText() {
    return this.text
  }
}

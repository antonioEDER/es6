// Exemplo de Orientado a Objetos

// Um exemplo de Classes
class Message {
  constructor(text = '', created = Date.now()) {
    this._text = text;
    this._created = created;
  }
  get created () {
    return this._created;
  }
  set created (created) {
    this._created = created;
  }
  get text () {
    return this._text;
  }
  set text (text) {
    this._text = text;
  }
  toString() {
    return `Message created at: ${this._created} - Text: ${this._text}`;
  }
}

// Um exemplo de Herança
class ImageMessage extends Message {
  constructor (text = '', created = Date.now(), url = '', thumbnail = '') {
    // Usa-se o super para acessar a classe Pai
    super(text, created);

    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString() {
    return `Photo - ${super.toString()} - Url: ${this.url} - Thumbnail: ${this.thumbnail}`;
  }
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday messages', Date.now() - 86400);
var imgMessage = new ImageMessage();

// Prints
console.log('-------------------------------------');

console.log(emptyMessage);
console.log(textMessage.toString());
console.log(imgMessage.toString());

console.log('-------------------------------------');

console.log('emptyMessage é uma instancia de Message? R =', emptyMessage instanceof Message);
console.log('textMessage é uma instancia de Message? R =', textMessage instanceof Message);
console.log('imgMessage é uma instancia de ImageMessage? R =', imgMessage instanceof Message);
console.log('imgMessage é uma instancia de ImageMessage? R =', imgMessage instanceof ImageMessage);

console.log('emptyMessage é uma instancia de ImageMessage? R =', emptyMessage instanceof ImageMessage);


const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs');
const path = require('path');

class MessageService {
  constructor () {
    let resolvePromisse;
    let rejectPromisse;

    const filePath = path.join(__dirname, 'messages.json');

    this.messagesPromise = new Promise((resolve, reject) => {
      resolvePromisse = resolve;
      rejectPromisse = reject;
    });

    fs.readFile(filePath, { encoding: 'utf-8'}, (err, data) => {
      if (err) {
        rejectPromisse(err);
      } else {
        resolvePromisse(data);
      }
    });
  }
  get messages() {
    return this.messagesPromise;
  }
}

const messagesService = new MessageService();

messagesService.messages.then(() => {

}).catch(() => {
 //
});
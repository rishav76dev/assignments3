const fs = require('fs');

// Data you want to write
const content = 'Hello, this content was written asynchronously!';

// Use fs.writeFile to write the data
fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File has been written successfully.');
});

console.log('This message logs before the file is written (async behavior).');

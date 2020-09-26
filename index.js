const fs = require('fs');

fs.readFile('./package.json', (e, b) => {
	if (e) return console.error('Error file reading');
	fs.createWriteStream('package.old.json').write(b);
})

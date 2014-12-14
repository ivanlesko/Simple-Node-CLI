// index.js

/**
* Module Dependencies
*/
var fs = require('fs'),
	stdin = process.stdin,
	stdout = process.stdout;


fs.readdir(process.cwd(), function(err, files) {
	console.log('');
	// console.log(files);

	if (!files.length) {
		return console.log('    \033[31m No files to show!\033[39m\n');
	}

	console.log('	Select which file or directory you want to see\n');

	function showFile(i) {
		var filename = files[i];

		fs.stat(__dirname + '/' + filename, function(err, stat) {
			if (stat.isDirectory()) {
				console.log('	' +i+ '    \033[32m' + filename + '/\033[39m');
			} else {
				console.log('	' +i+ '    \033[90m' + filename + '\033[39m');
			}

			i++;
			// Hit the last file already, present user input...
			if (i == files.length) {
				read();
			} else {
				showFile(i);
			}
		});
	}

	showFile(0);
});

function read() {
	console.log(' ');
	stdout.write('    \033[33mEnter your choice: \33[39m');
	stdin.resume();
	stdin.setEncoding('utf8');
}

function option (data) {
	
}












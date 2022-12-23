const path = require('path');
const { execFile } = require('child_process');
const executable = process.platform == 'win32' ? '/windows.exe' : '/linux';

// Trying to get executable path
let absolutePath = process.argv[1];
absolutePath = absolutePath.replace('/execute', '');
const bufPath = path.relative(process.cwd(), absolutePath);

// Running this executable
execFile(
  bufPath + executable,
  process.argv.slice(2, process.argv.length),
  (error, data) => {
    if (error) return console.warn(error);
    console.log('✔️ Successfully built!');
  }
);

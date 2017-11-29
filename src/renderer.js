// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict'
const loader = require('monaco-loader');

loader().then(monaco => {
  let editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })
});


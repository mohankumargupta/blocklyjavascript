 function openStackBlitz(folderName, showIndexHTML=true, showIndexCSS=true, showIndexJS=true) {

  let indexJS = '';
  let indexCSS = '';
  let indexHTML = '';

  function openFiles() {
    let openFiles = [];
    if (showIndexCSS) {
      openFiles.push('index.css');
    } 
    if (showIndexJS) {
      openFiles.push('index.js');
    }
    if (showIndexHTML) {
      openFiles.push('index.html');
    }

    return openFiles.join(',');
  }

  fetch(`https://raw.githubusercontent.com/mohankumargupta/blocklyjavascript/refs/heads/main/stackblitz/${folderName}/index.js`)
  .then(response => response.text())
  .then(text => {
    indexJS = text;
    return fetch(`https://raw.githubusercontent.com/mohankumargupta/blocklyjavascript/refs/heads/main/stackblitz/${folderName}/index.html`);
  })
  .then( response => response.text())
  .then(text => {
    indexHTML = text;
    return fetch(`https://raw.githubusercontent.com/mohankumargupta/blocklyjavascript/refs/heads/main/stackblitz/${folderName}/index.css`);
  })
  .then( response => response.text())
  .then(text => {
    indexCSS = text;

    StackBlitzSDK.openProject({
      files: {
        'index.js': indexJS,
        'index.html': indexHTML,
        'index.css': indexCSS,
      },
      template: 'javascript',
      description: 'Live',
      title: 'Live',

    }, {
      openFile: openFiles(),
      showSidebar: false,
      zenMode: true,
      devToolsHeight: 30,
    });
  });
  
}
 function openStackBlitz(folderName) {

  let indexJS = '';
  let indexCSS = '';
  let indexHTML = '';
  
  fetch(`https://raw.githubusercontent.com/mohankumargupta/blocklyjavascript/refs/heads/main/stackblitz/${folderName}/index.js`)
  .then(response => response.text())
  .then(text => {
    indexjs = text;
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
      openFile: 'index.js,index.html',
      showSidebar: false,
      zenMode: true,
      devToolsHeight: 50,
    });
  });
  
}
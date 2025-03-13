 function openStackBlitz(folderName) {
  
  fetch(`https://raw.githubusercontent.com/mohankumargupta/blocklyjavascript/refs/heads/main/stackblitz/${folderName}/index.js`)    
  .then(response => response.text())
  .then(text => {
    console.log(text);

    StackBlitzSDK.openProject({
      files: {
        'index.js': text,
        'index.html': '<html><body><script src="./index.js"></script></body></html>'
      }
    });
  });
  
}
window.addEventListener('load', function() {
  hljs.initHighlightingOnLoad()

  function highlightCodeBlocks() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
  
  function handleCopyClickedInElement(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
  }
  
  function addCopyButtonToElement(element) {    
    var button = document.createElement('button');
    button.setAttribute('class', 'copy-button');
    button.addEventListener('click', () => {
      handleCopyClickedInElement(element);
    });
    
    var div = document.createElement('div');
    div.setAttribute('class', 'copy-button-image');
    button.appendChild(div);
    element.appendChild(button);
    
    element.addEventListener('mouseenter', () => {
      toggleVisibilityForElement(button);
    });
    
    element.addEventListener('mouseleave', () => {
      toggleVisibilityForElement(button);
    });
  }
  
  function addCopyButtons() {
    document.querySelectorAll('pre').forEach((block) => {
      addCopyButtonToElement(block);
    });
  }
  
  function toggleVisibilityForElement(element) {
    const isVisibleClass = 'is-visible';
    
  	if (element.classList.contains(isVisibleClass)) {
  		element.classList.remove(isVisibleClass);
  		return;
  	}

  	element.classList.add(isVisibleClass);
  };
    
  function handleiAWriterChange() {
    highlightCodeBlocks();
    addCopyButtons();
  }
  
  document.body.addEventListener('ia-writer-change', handleiAWriterChange);
});
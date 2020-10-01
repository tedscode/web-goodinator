styleElement = document.createElement('style');
styleElement.setAttribute('type', 'text/css');
styleElement.innerHTML = '*:not(i):not(.material-icons):not(["aria-hidden:true"]) { font-family: \'Comic Sans MS\' !important; }';
document.head.appendChild(styleElement);

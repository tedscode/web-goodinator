styleElement = document.createElement('style');
styleElement.setAttribute('type', 'text/css');
styleElement.innerHTML = '*:not(i):not(.material-icons):not(svg):not(path):not(span) { font-family: \'Comic Sans MS\' !important; }';
document.head.appendChild(styleElement);

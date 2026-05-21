define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            // Use 'var' ONLY. No 'let' or 'const' allowed by the cloud compiler
            var userName = widget.getValue('UserName');
            var contentDiv = document.getElementById('widget-content');
            
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
            }
        }
    };

    return MainWidget;
});

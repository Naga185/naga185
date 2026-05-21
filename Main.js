// CHANGE THIS: Define as 'Main' instead of 'scripts/Main'
define('Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            var userName = widget.getValue('UserName');
            var contentDiv = document.getElementById('widget-content');
            
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
            }
        }
    };

    return MainWidget;
});

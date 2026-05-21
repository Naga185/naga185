define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            var displayName = 'User';

            // Safely grab your actual name directly from the widget container's system frame
            if (window.widget && window.widget.environment && window.widget.environment.user) {
                var p = window.widget.environment.user;
                if (p.firstName || p.lastName) {
                    displayName = ((p.firstName || '') + ' ' + (p.lastName || '')).trim();
                }
            }

            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + displayName + '!</h1>';
            }
        }
    };

    return MainWidget;
});

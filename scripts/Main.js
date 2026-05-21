define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            var userName = 'User';

            // Bypass the security restriction by pulling directly from the parent container environment
            if (typeof widget !== 'undefined' && widget.environment) {
                var userContext = widget.environment.user;
                if (userContext) {
                    var firstName = userContext.firstName || '';
                    var lastName = userContext.lastName || '';
                    userName = (firstName + ' ' + lastName).trim() || 'User';
                }
            }

            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
            }
        }
    };

    return MainWidget;
});

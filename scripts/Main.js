define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            // Read the user object straight from the platform widget context
            var userObj = widget.getValue('user');
            var userName = 'User';

            if (userObj) {
                var firstName = userObj.firstName || '';
                var lastName = userObj.lastName || '';
                userName = (firstName + ' ' + lastName).trim() || 'User';
            }
            
            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
            }
        }
    };

    return MainWidget;
});

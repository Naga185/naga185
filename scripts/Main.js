define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            var displayName = 'User';

            // Use the standard open UWA widget object storage context
            if (typeof widget !== 'undefined') {
                // Look for the user identity stored inside the native widget configuration
                var userObj = widget.getValue('user') || (widget.environment && widget.environment.user);
                
                if (userObj) {
                    var firstName = userObj.firstName || '';
                    var lastName = userObj.lastName || '';
                    displayName = ((firstName + ' ' + lastName).trim() || 'User');
                } else if (typeof UWA !== 'undefined' && UWA.Security && UWA.Security.currentUser) {
                    // Fallback to the global Unified Web Application framework security context
                    displayName = UWA.Security.currentUser.name || 'User';
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

define('scripts/Main', ['DS/i3DXCompassPlatformServices/i3DXCompassPlatformServices'], function (i3DXCompassPlatformServices) {
    'use strict';

    var MainWidget = {
        init: function () {
            // Use the official platform service to fetch the current user profile safely
            i3DXCompassPlatformServices.getUser({
                onComplete: function (data) {
                    var userName = 'User';
                    
                    if (data) {
                        var firstName = data.firstName || '';
                        var lastName = data.lastName || '';
                        userName = (firstName + ' ' + lastName).trim() || 'User';
                    }

                    // Render the name inside the callback once the platform returns it
                    var contentDiv = document.getElementById('widget-content');
                    if (contentDiv) {
                        contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
                    }
                },
                onFailure: function () {
                    // Fallback if the network request fails
                    var contentDiv = document.getElementById('widget-content');
                    if (contentDiv) {
                        contentDiv.innerHTML = '<h1>Hello World, User!</h1>';
                    }
                }
            });
        }
    };

    return MainWidget;
});

define('Main', ['DS/PlatformAPI/PlatformAPI'], function (PlatformAPI) {
    'use strict';

    var MainWidget = {
        init: function () {
            // Get the automatically logged-in user profile object
            var user = PlatformAPI.getUser();
            
            // You can use user.firstName, user.lastName, or user.login
            var userName = user ? (user.firstName + ' ' + user.lastName) : 'Guest';
            
            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
            }
        }
    };

    return MainWidget;
});
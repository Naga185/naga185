define('scripts/Main', ['UWA/Class/User'], function (UWAUser) {
    'use strict';

    var MainWidget = {
        init: function () {
            // Fetch the user data using the standard open platform class
            var firstName = UWAUser.get('firstName') || '';
            var lastName = UWAUser.get('lastName') || '';
            
            // Combine them to get your full name
            var userName = (firstName || lastName) ? (firstName + ' ' + lastName) : 'User';
            
            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + userName + '!</h1>';
            }
        }
    };

    return MainWidget;
});

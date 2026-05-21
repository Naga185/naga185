define('scripts/Main', ['DS/WAFData/WAFData'], function (WAFData) {
    'use strict';

    var MainWidget = {
        init: function () {
            // 1. Grab the platform instance URL out of the window location parameters
            var urlParams = new URLSearchParams(window.location.search);
            var platformUrl = urlParams.get('x3dPlatformId') || 'https://r1132100379178-ap2-ifwe.3dexperience.3ds.com';
            
            // 2. Build the official passport endpoint string
            var passportUrl = platformUrl.replace(/\/$/, '') + '/3DPassport/users/current';

            // 3. Request your profile data securely using the platform's trusted authentication tunnel
            WAFData.authenticatedRequest(passportUrl, {
                method: 'GET',
                type: 'json',
                onComplete: function (response) {
                    var displayName = 'User';
                    if (response) {
                        if (response.preferredLanguage) { // Verifies it's a valid profile object
                            var firstName = response.firstName || '';
                            var lastName = response.lastName || '';
                            displayName = (firstName + ' ' + lastName).trim() || response.name || 'User';
                        }
                    }
                    MainWidget.render(displayName);
                },
                onFailure: function () {
                    // Fallback string if the security policy is restricted
                    MainWidget.render('User');
                }
            });
        },

        render: function (name) {
            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Hello World, ' + name + '!</h1>';
            }
        }
    };

    return MainWidget;
});

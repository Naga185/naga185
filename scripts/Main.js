define('scripts/Main', ['DS/WAFData/WAFData'], function (WAFData) {
    'use strict';

    var MainWidget = {
        init: function () {
            // Find the core platform service URL dynamically from the widget setup
            var platformUrl = widget.getValue('x3dPlatformId') || widget.getValue('3DEXPERIENCE_Platform');
            
            // If the platform ID isn't directly exposed, default to the cloud instance origin
            var passportUrl = 'https://r1132100379178-ap2-ifwe.3dexperience.3ds.com/3DPassport/users/current';

            // Use authenticated platform proxy to request your profile records safely
            WAFData.authenticatedRequest(passportUrl, {
                method: 'GET',
                type: 'json',
                onComplete: function (response) {
                    var displayName = 'User';
                    if (response && response.name) {
                        displayName = response.name; // Grabs your full display profile name
                    } else if (response && (response.firstName || response.lastName)) {
                        displayName = ((response.firstName || '') + ' ' + (response.lastName || '')).trim();
                    }

                    MainWidget.render(displayName);
                },
                onFailure: function (error) {
                    // Fallback to testing the native frame properties if API is restricted
                    var fallbackName = 'User';
                    if (widget.environment && widget.environment.user) {
                        fallbackName = widget.environment.user.firstName || 'User';
                    }
                    MainWidget.render(fallbackName);
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

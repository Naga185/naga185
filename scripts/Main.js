define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            var preferenceMarkup = '<ul>';

            if (typeof widget !== 'undefined') {
                // Read all active preferences assigned to this widget container
                var prefs = widget.getPreferences();
                
                for (var key in prefs) {
                    if (prefs.hasOwnProperty(key)) {
                        var val = widget.getPreference(key) || 'none';
                        preferenceMarkup += '<li><strong>' + key + ':</strong> ' + val + '</li>';
                    }
                }
                preferenceMarkup += '</ul>';
            } else {
                preferenceMarkup = '<p style="color:red;">Widget frame context missing.</p>';
            }

            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Widget Preferences Found:</h1>' + preferenceMarkup;
            }
        }
    };

    return MainWidget;
});

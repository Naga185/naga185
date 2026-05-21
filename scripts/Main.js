define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {

            var displayMarkup = '';

            if (typeof widget !== 'undefined') {

                // Correct way
                var testUser = widget.getValue('test_user') || 'Preference Not Found';

                displayMarkup += '<p><strong>Successfully Fetched Preference Data:</strong></p>';
                displayMarkup += '<h2>' + testUser + '</h2>';

            } else {

                displayMarkup = '<p style="color:red;">Widget frame context missing.</p>';
            }

            var contentDiv = document.getElementById('widget-content');

            if (contentDiv) {
                contentDiv.innerHTML =
                    '<h1>Testing Complete!</h1>' + displayMarkup;
            }
        }
    };

    return MainWidget;
});

define('scripts/Main', [], function () {

    'use strict';

    var MainWidget = {

        init: function () {

            var html = '';

            try {

                html += '<p>Widget Object Exists</p>';

                var pref = widget.getValue('test_user');

                console.log("Preference:", pref);

                html += '<p><strong>Preference Value:</strong></p>';
                html += '<h2>' + pref + '</h2>';

                if (!pref) {
                    html += '<p style="color:red;">Preference is NULL/EMPTY</p>';
                }

            } catch (e) {

                html += '<p style="color:red;">ERROR:</p>';
                html += '<pre>' + e + '</pre>';

                console.error(e);
            }

            document.getElementById('widget-content').innerHTML =
                '<h1>Testing Complete!</h1>' + html;
        }
    };

    return MainWidget;
});

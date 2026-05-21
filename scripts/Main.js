define('scripts/Main', [], function () {
    'use strict';

    var MainWidget = {
        init: function () {
            var diagnosticInfo = '';

            if (typeof widget !== 'undefined') {
                // Fetch basic platform identifiers that don't violate security policies
                var platformId = widget.getValue('x3dPlatformId') || 'Not Found';
                var lang = widget.lang || 'Not Detected';
                
                diagnosticInfo += '<p><strong>Platform ID:</strong> ' + platformId + '</p>';
                diagnosticInfo += '<p><strong>Language:</strong> ' + lang + '</p>';
                diagnosticInfo += '<p><strong>Widget ID:</strong> ' + (widget.id || 'N/A') + '</p>';
            } else {
                diagnosticInfo = '<p style="color:red;">Widget object is not accessible!</p>';
            }

            var contentDiv = document.getElementById('widget-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<h1>Diagnostic Test Success!</h1>' + diagnosticInfo;
            }
        }
    };

    return MainWidget;
});

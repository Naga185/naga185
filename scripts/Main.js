define('scripts/Main', [
    'DS/WAFData/WAFData'
], function (WAFData) {

    'use strict';

    return {

        init: function () {

            console.log("Main init called");

            var div = document.getElementById('widget-content');

            div.innerHTML = '<h2>Calling API...</h2>';

            WAFData.authenticatedRequest(
                '/resources/v1/modeler/pno/person',   // ✅ FIXED
                {
                    method: 'GET',
                    type: 'json',

                    headers: {
                        'Accept': 'application/json'
                    },

                    onComplete: function (data) {

                        console.log('SUCCESS:', data);

                        div.innerHTML =
                            '<h1 style="color:green;">SUCCESS</h1>' +
                            '<pre>' +
                            JSON.stringify(data, null, 2) +
                            '</pre>';
                    },

                    onFailure: function (error) {

                        console.error('FAILED:', error);

                        div.innerHTML =
                            '<h1 style="color:red;">FAILED</h1>' +
                            '<pre>' +
                            JSON.stringify(error, null, 2) +
                            '</pre>';
                    }
                }
            );
        }
    };
});

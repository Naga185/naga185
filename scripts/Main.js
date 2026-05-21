define('scripts/Main', [

    'DS/WAFData/WAFData'

], function (WAFData) {

    'use strict';

    return {

        init: function () {

            document.getElementById('widget-content').innerHTML =
                '<h2>Calling 3DX API...</h2>';

            WAFData.authenticatedRequest(

                '/resources/v1/application/CSRF',

                {

                    method: 'GET',
                    type: 'json',

                    onComplete: function (data) {

                        console.log(data);

                        document.getElementById('widget-content').innerHTML =
                            '<h1>SUCCESS</h1>' +
                            '<pre>' +
                            JSON.stringify(data, null, 2) +
                            '</pre>';
                    },

                    onFailure: function (error) {

                        console.error(error);

                        document.getElementById('widget-content').innerHTML =
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

function executeInitWidget(w) {
    require(["DS/WAFData/WAFData"], function (WAFData) {

        var myWidget = {
            init: function () {
                console.log("Widget initialized");
                this.test3DXConnection();
            },

            test3DXConnection: function () {
                var statusEl = document.getElementById("status");

                // Trial SecurityContext from your screenshot:
                // Responsibility.Organization.CollaborativeSpace
                // If this exact value fails, the internal role token may differ.
                var securityContext = "Leader.Company Name.CMTest";

                var url = "/3dspace/resources/v1/modeler/dseng/dseng:EngItem/search" +
                          "?$top=1" +
                          "&$mask=dskern:Mask.Default";

                statusEl.textContent = "Calling 3DX search...";

                WAFData.authenticatedRequest(url, {
                    method: "GET",
                    type: "json",
                    headers: {
                        "SecurityContext": securityContext
                    },

                    onComplete: function (data) {
                        console.log("3DX response success:", data);

                        var count = 0;
                        var firstText = "";

                        if (data && typeof data.totalItems !== "undefined") {
                            count = data.totalItems;
                        }

                        if (data && data.member && data.member.length > 0) {
                            firstText = data.member[0].name || data.member[0].title || data.member[0].id || "";
                        }

                        statusEl.textContent =
                            "SUCCESS: 3DX call worked. GitHub Pages is NOT the blocker. " +
                            "Count = " + count + (firstText ? " | First item = " + firstText : "");
                    },

                    onFailure: function (error) {
                        console.error("3DX response failed:", error);
                        statusEl.textContent =
                            "FAILED: request failed. Check browser console and network tab.";
                    }
                });
            }
        };

        w.addEvent("onLoad", function () {
            myWidget.init();
        });

        w.addEvent("onRefresh", function () {
            myWidget.test3DXConnection();
        });
    });
}

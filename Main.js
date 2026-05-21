function executeWidgetCode() {
	require(["UWA/Drivers/jQuery", "HelloModule/Toto"], function($,totoModule) {
		var myWidget = {
            onLoadWidget: function() {
                widget.body.innerHTML = "<p>Hello, World !</p>" + "<br/>" + totoModule.fctHello("My Name: ") + widget.getPreference("UserName").value;
            },
            toto: "test"
        };
        widget.addEvent("onLoad", myWidget.onLoadWidget);
    });
}
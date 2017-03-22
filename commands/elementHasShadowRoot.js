module.exports.command = function(selector, callback) {
    console.log('In elementHasShadowRoot');

    var client = this;

    // Sends a request to get an element, then checks if that element has a shadow root
    client.execute(function(selector) {
        console.log('wha?');
        return document.querySelector(selector).shadowRoot;
    }, [selector], function(result) {
        console.dir('Result: ' +  result.value);

        if(callback) {
            callback.call(self, result.value);
        }
    });

    return this;
};
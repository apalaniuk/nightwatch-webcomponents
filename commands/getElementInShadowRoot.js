'use strict';

let currSubtree = null;

const getElementInShadowRoot = function(elements, callback) {
    console.log('In getElementInShadowRoot: ' + this);

    const client = this;

    const allElements = elements.slice();
    const element = allElements.shift();

    client.execute( function(element) {
        console.log('wha?');
        const currSubtree = currSubtree || document;
        const el = currSubtree.querySelector(element);

        if (el.shadowRoot) {
            currSubtree = el.shadowRoot;
            return currSubtree;
        } else {
            return el;
        }
        
    }, [element], function(result) {
        console.dir('Result: ' +  result.value);

        if(allElements.length === 0) {
            console.log('At the base element?' + Object.keys(result.value) );
            if( callback ) { 
                callback.call(self, result.value);
            }
        } else {
            this.getElementInShadowRoot(allElements, callback);
        }
    });

    return this;
};

module.exports.command = getElementInShadowRoot;
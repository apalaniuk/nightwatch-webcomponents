/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

module.exports = {
  'demo test google' : function (client) {
    client
        .url('http://shop.polymer-project.org')
        .waitForElementVisible('body', 1000);

        client.myVar = 1;

    client
        .expect.element('shop-app')
        .to.not.have.attribute('unresolved').before(1000);

        console.log(client.myVar);

    client
        .elementHasShadowRoot('shop-app')
        .getElementInShadowRoot(['shop-app', 'footer']);
    } ,
    'demo test google 2' : function (client) {

        console.log(client.myVar);
        client
            .url('http://shop.polymer-project.org')
            .waitForElementVisible('body', 1000);

        client
            .expect.element('shop-app')
            .to.not.have.attribute('unresolved').before(1000);

        client
            .elementHasShadowRoot('shop-app')
            .getElementInShadowRoot(['shop-app', 'footer']);
    }
    /*

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  } */
};
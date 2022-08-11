// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .end();
  },

  'example e2e test using a custom command': (browser) => {
    browser
      .openHomepage()
      .click({ selector: '#app #nav a', index: 1 })
      .assert.containsText('h1', 'This is an about page')
      .end();
  },
};

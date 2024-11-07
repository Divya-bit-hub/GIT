const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a2ow2i',

defaultCommandTimeout: 6000,

env: {
  url: "https://rahulshettyacademy.com"
},

retries:{
  runMode: 2,
  },  

reporter: 'cypress-mochawesome-reporter',

video: true,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});



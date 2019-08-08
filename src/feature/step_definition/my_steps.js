
const {Given, Then, When} = require('cucumber')

    Given(/^User performed searchings of "([^"]*)" item for "([^"]*)" department$/,  (arg1, arg2) =>{
            // var options = {
            //     host: 'http://localhost:4444/wd/hub',
            //     desiredCapabilities: {
            //         browserName: 'chrome',
            //         version: '65.0',
            //         enableVNC: true,
            //         enableVideo: false
            //     }
            // };
            // var client = webdriverio.remote(options);
            //
            // client
            //     .init()
            //     .url('https://duckduckgo.com/')
            //     .setValue('#search_form_input_homepage', 'WebdriverIO')
            //     .click('#search_button_homepage')
            //     .getTitle()
            //     .then(function(title) {
            //         console.log('Title is: ' + title);
            //         // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
            //  })
            //     .end();

          //  console.log("1234567890");
            browser.url('/');
            browser.elementClick("element");
            document.getElementById("123123123123123");
    })



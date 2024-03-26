$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FacebookReg1.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch url of fb application",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_url_of_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_click_the_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass firstname in firstname text box",
  "rows": [
    {
      "cells": [
        "firstname1",
        "Thamizh"
      ]
    },
    {
      "cells": [
        "firstname2",
        "Selva"
      ]
    },
    {
      "cells": [
        "firstname3",
        "Yuva"
      ]
    },
    {
      "cells": [
        "firstname4",
        "Raj"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_pass_firstname_in_firstname_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass secondname in secondname text box",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_pass_secondname_in_secondname_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "Tamil18",
        "958465884",
        "Thivensh"
      ]
    },
    {
      "cells": [
        "Selva22",
        "596597352",
        "Jeevitha"
      ]
    },
    {
      "cells": [
        "Yuva88",
        "4658825465",
        "Nikesh55"
      ]
    },
    {
      "cells": [
        "Raj44",
        "65832555983",
        "keerthick"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_pass_mobileno_or_email_in_email_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To create new password using new password text box",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_create_new_password_using_new_password_text_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookRegistraion.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Proj.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url of the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_url_of_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to the home page or not",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.to_check_whether_navigate_to_the_home_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookRegistraion.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildates\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to hass the data \"\u003cpassworddates\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildates",
        "passworddates"
      ]
    },
    {
      "cells": [
        "thamizhselva181155@gmail.com",
        "Inmakes"
      ]
    },
    {
      "cells": [
        "selva@gmail.com",
        "1245865"
      ]
    },
    {
      "cells": [
        "yuva@gmail.com",
        "selenium"
      ]
    },
    {
      "cells": [
        "rajrr@gmail.com",
        "1822982"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"thamizhselva181155@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hass the data \"Inmakes\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"selva@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hass the data \"1245865\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"yuva@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hass the data \"selenium\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximize window",
  "keyword": "Given "
});
formatter.match({
  "location": "FacebookRegistraion.to_launch_the_chrome_browser_and_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"rajrr@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to hass the data \"1822982\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_hass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookRegistraion.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});
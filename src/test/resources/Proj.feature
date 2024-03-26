@Feature1
Feature: To validate the login functionality of facebook application

Background:
Given To launch the chrome browser and maximize window

@Regression @Sanity
Scenario: To validate login with valid username and invalid password
When To launch the url of the facebook application
And To pass valid username in email field
And To pass invalid password in password field
And To click the login button
And To check whether navigate to the home page or not
Then To close the browser

@Smoke
Scenario Outline: To validate the positive and negative combination of login functionality
When User has to hit the facebook url
And User has to pass the data "<emaildates>" in email field
And User has to hass the data "<passworddates>" in password field
And User has to click login button
Then User has to close the browser

Examples:

|emaildates                  |passworddates|
|thamizhselva181155@gmail.com|Inmakes      |
|selva@gmail.com						 |1245865 		 |					 
|yuva@gmail.com						   |selenium 		 | 												
|rajrr@gmail.com						 |1822982			 |
 
 
 
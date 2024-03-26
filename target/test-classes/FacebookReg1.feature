@Feature2
Feature: To validate the account creation of fb application

@Sanity
Scenario: To create new account
Given To launch the browser and maximize window
When To launch url of fb application
And To click the create new account button
#One dimensional map data
And To pass firstname in firstname text box
#key				value
|firstname1|Thamizh|
|firstname2|Selva  |
|firstname3|Yuva   |
|firstname4|Raj    |

And To pass secondname in secondname text box

#Two dimensional map data
And To pass mobileno or email in email text box
|password1|password2|password3|
|Tamil18|958465884|Thivensh|
|Selva22|596597352|Jeevitha|
|Yuva88|4658825465|Nikesh55|
|Raj44|65832555983|keerthick|

And To create new password using new password text box
Then To close the chrome browser


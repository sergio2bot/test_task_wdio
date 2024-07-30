Feature: Some test feature to be implemented

Scenario: Check all the Software positions opened in Madrid
Given the user opens "home" page
When the user accepts cookies
And the user clicks on the "Careers" link in the footer
Then the user is on the "careers" page
When the user clicks on "View open positions" link
Then the user is on the "open-positions" page
When the user selects option "Madrid" from "location" drop down
And the user selects option "Software" from "depart" drop down
Then the user sees list of "Software" positions available in "Madrid"
When the user clicks on the "Read More" link for any open position
Then the user sees greenhouse iframe is present
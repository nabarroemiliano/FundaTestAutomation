Feature: Automated Tests
Description: The purporse of this feature is to test Funda search home page

Scenario Outline: Customer search for buying a house within a range of price
Given user is on Home Page
When he select the Koop option
And enter a "<search>" city name
And choose a range from the location
And choose a minimum price
And choose a maximum price
And enter Zoek koop
Examples:
	|search|
	|Ámsterdam|
	
	
Scenario Outline: Customer search for renting a house within a range of price
Given user is on Home Page
When he select the Huur option
And enter a "<search>" city name
And choose a range from the location
And choose a minimum price for rent
And choose a maximum price for rent
And enter Zoek huur
Examples:
	|search|
	|Prinsengracht, Amsterdam|
	

Scenario: Customer search for buying a house in Europe
Given user is on Home Page
When he select the Europe option
And he choose a Country
And he enter Zoek Europe

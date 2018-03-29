$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Automated Tests",
  "description": "Description: The purporse of this feature is to test Funda search home page",
  "id": "automated-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Customer search for buying a house within a range of price",
  "description": "",
  "id": "automated-tests;customer-search-for-buying-a-house-within-a-range-of-price",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he select the Koop option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter a \"\u003csearch\u003e\" city name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "choose a range from the location",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "choose a minimum price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "choose a maximum price",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter Zoek koop",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "automated-tests;customer-search-for-buying-a-house-within-a-range-of-price;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 13,
      "id": "automated-tests;customer-search-for-buying-a-house-within-a-range-of-price;;1"
    },
    {
      "cells": [
        "Ámsterdam"
      ],
      "line": 14,
      "id": "automated-tests;customer-search-for-buying-a-house-within-a-range-of-price;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Customer search for buying a house within a range of price",
  "description": "",
  "id": "automated-tests;customer-search-for-buying-a-house-within-a-range-of-price;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he select the Koop option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter a \"Ámsterdam\" city name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "choose a range from the location",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "choose a minimum price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "choose a maximum price",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter Zoek koop",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 11793248615,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_select_the_Koop_option()"
});
formatter.result({
  "duration": 2932122753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ámsterdam",
      "offset": 9
    }
  ],
  "location": "Steps.enter_a_city_name(String)"
});
formatter.result({
  "duration": 179388456,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_a_range_from_the_location()"
});
formatter.result({
  "duration": 425628214,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_a_minimum_price()"
});
formatter.result({
  "duration": 396387493,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_a_maximum_price()"
});
formatter.result({
  "duration": 360617071,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_Zoek_koop()"
});
formatter.result({
  "duration": 3128433385,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Customer search for renting a house within a range of price",
  "description": "",
  "id": "automated-tests;customer-search-for-renting-a-house-within-a-range-of-price",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "he select the Huur option",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "enter a \"\u003csearch\u003e\" city name",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "choose a range from the location",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "choose a minimum price for rent",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "choose a maximum price for rent",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "enter Zoek huur",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "automated-tests;customer-search-for-renting-a-house-within-a-range-of-price;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 26,
      "id": "automated-tests;customer-search-for-renting-a-house-within-a-range-of-price;;1"
    },
    {
      "cells": [
        "Prinsengracht, Amsterdam"
      ],
      "line": 27,
      "id": "automated-tests;customer-search-for-renting-a-house-within-a-range-of-price;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Customer search for renting a house within a range of price",
  "description": "",
  "id": "automated-tests;customer-search-for-renting-a-house-within-a-range-of-price;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "he select the Huur option",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "enter a \"Prinsengracht, Amsterdam\" city name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "choose a range from the location",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "choose a minimum price for rent",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "choose a maximum price for rent",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "enter Zoek huur",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9382000336,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_select_the_Huur_option()"
});
formatter.result({
  "duration": 3003300581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prinsengracht, Amsterdam",
      "offset": 9
    }
  ],
  "location": "Steps.enter_a_city_name(String)"
});
formatter.result({
  "duration": 265496633,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_a_range_from_the_location()"
});
formatter.result({
  "duration": 552074713,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_a_minimum_price_for_rent()"
});
formatter.result({
  "duration": 313121473,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_a_maximum_price_for_rent()"
});
formatter.result({
  "duration": 344051067,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_Zoek_huur()"
});
formatter.result({
  "duration": 2298966949,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Customer search for buying a house in Europe",
  "description": "",
  "id": "automated-tests;customer-search-for-buying-a-house-in-europe",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "he select the Europe option",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "he choose a Country",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "he enter Zoek Europe",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8929519692,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_select_the_Europe_option()"
});
formatter.result({
  "duration": 3771015403,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_choose_a_Country()"
});
formatter.result({
  "duration": 684725529,
  "status": "passed"
});
formatter.match({
  "location": "Steps.he_enter_Zoek_Europe()"
});
formatter.result({
  "duration": 2792754079,
  "status": "passed"
});
});
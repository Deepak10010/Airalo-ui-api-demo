Feature: Airalo eSIM search and purchase flow

  Scenario: User searches for Japan and verifies package details
    Given I navigate to the Airalo homepage
    When I search for the destination
    When I select Japan from the Local section in autocomplete
    When I click Buy Now on the paid eSIM card
    Then I should see a popup with the following details



    

Feature: ProductsPage

As a user, i want to navigate on module ProductsPage and do basic anctions 

Scenario: Insert products on cart
  Given I visit Products ProductsPage
  When I click on add item badge button on card
  And I want to insert one product on cart
  When I click on add item badge button
  Then I must have two items on cart

Scenario: Explore sideview component
    Given I click on add item badge button on card
    And I open the sideview by Fab
    Then the sideview should be open
    Then i close the sideview


Feature: ProductsPage

As a user, i want to navigate on module ProductsPage and do basic interactions 

Scenario: Insert products on cart
  Given I visit ProductsPage
  When I click on add item badge button on card
  Then Must have one item on cart
  When I click on add item badge button on second card
  Then Must have two items on cart

Scenario: Explore sideview component
  When I click on add item badge button on card
  And I open the sideview by Fab
  Then The sideview should be open
  Then I close the sideview
@checkout
Feature: Checkout flow

  Scenario: User completes checkout successfully
    Given user is logged in as standard user
    When user adds "Sauce Labs Bike Light" to cart
    And user opens cart
    And user proceeds to checkout
    And user fills checkout information
    And user finishes checkout
    Then success message should be shown
Feature: Test Angular Homepage

  Scenario: Go to Get Started page
    Given I view the "https://angular.io/"
    When I click on button
    When I wait for 3000 ms
    Then the page title should be "Angular - Getting Started with Angular: Your First App"

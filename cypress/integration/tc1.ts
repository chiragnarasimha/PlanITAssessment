/*************************************************************************
 * Description : This file will describe all the first test case
 * Steps to follow:
 * 1.    From the home page go to contact page
 * 2.    Click submit button
 * 3.    Validate errors
 * 4.    Populate mandatory fields
 * 5.    Validate errors are gone
 *
 * Date             Author                       Modification
 * ----------------------------------------------------------------
 * 11 Dec 2021      Chirag Narasimha Murthy      Created
 *************************************************************************/
import {
  addItemToCart,
  fillInContactForm,
  loadApplication,
  navigateToContactPage,
  navigateToShopPage,
  submitContactForm,
} from "../support/supportingFunctions";

describe(`Check the validations on the contact page form`, () => {
  it(`Sunny Day: Users can submit the form when all the details are entered correctly`, () => {
    loadApplication();
    navigateToContactPage();
    fillInContactForm({
      forename: `Cypress`,
      surname: `Test Automation`,
      email: `cypress@testAutomation.com`,
      telephone: `0401 234 567`,
      message: `This is a test from the Cypress Test Automation Framework`,
    });
    submitContactForm({ validateSuccess: true });
  });
  it(`Rainy Day: User submits empty form`, () => {
    loadApplication();
    navigateToContactPage();
    submitContactForm({
      validateFailure: {
        forename: true,
        email: { emptyField: true },
        message: true,
      },
    });
  });
  it(`Rainy Day: User enters forename only`, () => {
    loadApplication();
    navigateToContactPage();
    fillInContactForm({
      forename: `Cypress`,
    });
    submitContactForm({
      validateFailure: {
        email: { emptyField: true },
        message: true,
      },
    });
  });
  it(`Rainy Day: User enters forename, email only`, () => {
    loadApplication();
    navigateToContactPage();
    fillInContactForm({
      forename: `Cypress`,
      email: `cypress@testAutomation.com`,
    });
    submitContactForm({
      validateFailure: {
        message: true,
      },
    });
  });
  it(`Rainy Day: User enters email in the wrong format`, () => {
    loadApplication();
    navigateToContactPage();
    fillInContactForm({
      forename: `Cypress`,
      surname: `Test Automation`,
      email: `cypress`,
      telephone: `0401 234 567`,
      message: `This is a test from the Cypress Test Automation Framework`,
    });
    submitContactForm({
      validateFailure: {
        email: { incorrectFormat: true },
      },
    });
  });
});

describe(`Check the users are able view items in the cart`, () => {
  it.only(`test`, () => {
    loadApplication();
    navigateToShopPage();
    addItemToCart(`Funny Cow`);
    addItemToCart(`Funny Cow`);
    addItemToCart(`Fluffy Bunny`);
  });
});

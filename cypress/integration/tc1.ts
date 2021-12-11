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
import { navigateToHome } from "../support/supportingFunctions";

describe(`TC1`, () => {
  // type Url = string;
  // it("loads examples", () => {
  //   const url: Url = "https://example.cypress.io";
  //   cy.visit(url);
  //   cy.contains("Kitchen Sink");
  // });
  it(`Check the validations on the contact page form`, () => {
    navigateToHome();
  });
});

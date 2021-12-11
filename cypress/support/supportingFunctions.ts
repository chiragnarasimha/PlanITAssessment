import {
  xpath_homePageH1,
  xpath_homePageLogo,
  xpath_topNavBar_contactButton,
} from "./xpathDeclarations";

/**
 * Use this the app is being loaded for the first time
 */
export const loadApplication = () => {
  cy.log(`**FUNCTION: navigateToHome()**`);
  // Navigate to the homepage
  cy.fixture("url").then((url) => {
    cy.visit(url.baseURL);
  });
  // Validate that the page has fully rendered4
  cy.xpath(`${xpath_homePageLogo}`).should(`be.visible`);
  cy.xpath(`${xpath_homePageH1}`).should(`be.visible`);
};

/**
 * This will navigate to the home page of the application
 */
export const navigateToHome = () => {
  cy.log(`**FUNCTION: navigateToHome()**`);

  // Navigate to the homepage
  cy.fixture("url").then((url) => {
    cy.visit(url.baseURL);
  });
  // Validate that the page has fully rendered4
  cy.xpath(`${xpath_homePageLogo}`).should(`be.visible`);
  cy.xpath(`${xpath_homePageH1}`).should(`be.visible`);
};

export const navigateToContactPage = () => {
  cy.log(`**FUNCTION: navigateToContactPage()**`);

  cy.xpath(`${xpath_topNavBar_contactButton}`).click();
};

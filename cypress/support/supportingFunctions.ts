import {
  xpath_contactPage_email,
  xpath_contactPage_emptyEmailValidation,
  xpath_contactPage_forename,
  xpath_contactPage_forenameValidation,
  xpath_contactPage_incorrectEmailValidation,
  xpath_contactPage_message,
  xpath_contactPage_messageValidation,
  xpath_contactPage_sendingFeedbackHeading,
  xpath_contactPage_submitButton,
  xpath_contactPage_surname,
  xpath_contactPage_telephone,
  xpath_contactPage_thanksMessage,
  xpath_homePageH1,
  xpath_homePageLogo,
  xpath_shopPage_1stItem,
  xpath_shopPage_8stItem,
  xpath_topNavBar_cartButton,
  xpath_topNavBar_cartItemCount,
  xpath_topNavBar_contactButton,
  xpath_topNavBar_homeButton,
  xpath_topNavBar_shopButton,
} from "./xpathDeclarations";
// **************************** General Functions **************************** //
/**
 * Use this when the app needs to be loaded for the first time
 */
export const loadApplication = () => {
  cy.log(`**FUNCTION: loadApplication()**`);
  // Navigate to the homepage
  cy.fixture("url").then((url) => {
    cy.visit(url.baseURL);
  });
  // When the application is loaded for the first time, it will load the home page
  waitForHomePageToRender();
};

// ---------- Page Navigations ---------- //
/**
 * Navigate to the home page of the application
 */
export const navigateToHome = () => {
  cy.log(`**FUNCTION: navigateToHome()**`);

  cy.xpath(`${xpath_topNavBar_homeButton}`).click();
  waitForHomePageToRender();
};
/**
 * Implicitly wait for the page to load
 */
const waitForHomePageToRender = () => {
  // Validate that the page has fully rendered
  cy.xpath(`${xpath_homePageLogo}`).should(`be.visible`);
  cy.xpath(`${xpath_homePageH1}`).should(`be.visible`);
};

/**
 * Navigate to the contact page of the application
 */
export const navigateToContactPage = () => {
  cy.log(`**FUNCTION: navigateToContactPage()**`);

  cy.xpath(`${xpath_topNavBar_contactButton}`).click();
  // Check that the contact page has fully rendered
  waitForContactPageToRender();
};

/**
 * Implicitly wait for the page to load
 */
const waitForContactPageToRender = () => {
  cy.xpath(`//strong[text()="We welcome your feedback"]`).should(`be.visible`);
  cy.xpath(`${xpath_contactPage_forename}`).should(`be.visible`);
  cy.xpath(`${xpath_contactPage_surname}`).should(`be.visible`);
  cy.xpath(`${xpath_contactPage_email}`).should(`be.visible`);
  cy.xpath(`${xpath_contactPage_telephone}`).should(`be.visible`);
  cy.xpath(`${xpath_contactPage_message}`).should(`be.visible`);
  cy.xpath(`${xpath_contactPage_submitButton}`).should(`be.visible`);
};

/**
 * Navigate to the contact page of the application
 */
export const navigateToShopPage = () => {
  cy.log(`**FUNCTION: navigateToShopPage()**`);

  cy.xpath(`${xpath_topNavBar_shopButton}`).click();
  // Check that the contact page has fully rendered
  // waitForContactPageToRender();
  waitForShopPageToRender();
};

/**
 * Implicitly wait for the page to load
 */
const waitForShopPageToRender = () => {
  cy.xpath(`${xpath_shopPage_1stItem}`).should(`be.visible`);
  cy.xpath(`${xpath_shopPage_8stItem}`).should(`be.visible`);
};

/**
 * Navigate to the cart page of the application.
 * Note: This
 */
export const navigateToCartPage = () => {
  cy.log(`**FUNCTION: navigateToCartPage()**`);
  cy.xpath(`${xpath_topNavBar_cartButton}`).click();
};

// **************************** Contact Page Specific Functions **************************** //
/**
 * Fill in the contact information. This function can also be used to validate the errors on the page. Therefore, all of the inputs are optional.
 * @param formData.forename string: forename
 * @param formData.surname string: surname
 * @param formData.email string: email
 * @param formData.telephone int: telephone
 * @param formData.message string: message
 *
 */
export const fillInContactForm = (formData: {
  forename?: string;
  surname?: string;
  email?: string;
  telephone?: string;
  message?: string;
}) => {
  cy.log(`**FUNCTION: fillInContactForm(** ${JSON.stringify(formData)} **)**`);
  if (formData) {
    if (formData.forename !== undefined) {
      cy.xpath(`${xpath_contactPage_forename}`)
        .clear()
        .type(`${formData.forename}`);
    }
    if (formData.surname !== undefined) {
      cy.xpath(`${xpath_contactPage_surname}`)
        .clear()
        .type(`${formData.surname}`);
    }
    if (formData.email !== undefined) {
      cy.xpath(`${xpath_contactPage_email}`).clear().type(`${formData.email}`);
    }
    if (formData.telephone !== undefined) {
      cy.xpath(`${xpath_contactPage_telephone}`)
        .clear()
        .type(`${formData.telephone}`);
    }
    if (formData.message !== undefined) {
      cy.xpath(`${xpath_contactPage_message}`)
        .clear()
        .type(`${formData.message}`);
    }
  }
};

/**
 * Will press the submit button. There are two validations supported.
 * 1. Success - Validate that the form was successfully submitted
 * 2. Failure - Validate that the form is providing the right feedback to the users to guide them into success scenario
 * @param options.validateSuccess boolean: Check if the users are presented with the right visual cues for sunny day scenario
 * @param options.validateFailure object: Various checks and validations for rainy day scenarios
 * @param options.validateFailure.forename boolean: Check if the forename field is not left empty
 * @param options.validateFailure.email.emptyField boolean: Check if the email field is not left empty
 * @param options.validateFailure.email.incorrectFormat boolean: Check if the email entered is in the correct format
 * @param options.validateFailure.message boolean: check if the message field is not left empty
 *
 */
export const submitContactForm = (options?: {
  validateSuccess?: boolean;
  validateFailure?: {
    forename?: boolean;
    email?: {
      emptyField?: boolean;
      incorrectFormat?: boolean;
    };
    message?: boolean;
  };
}) => {
  cy.log(`**FUNCTION: submitContactForm(** ${JSON.stringify(options)} **)**`);
  cy.xpath(`${xpath_contactPage_submitButton}`).dblclick();
  if (options) {
    // These are all the validations for the success scenarios
    if (options.validateSuccess) {
      cy.xpath(`${xpath_contactPage_sendingFeedbackHeading}`).should(
        `be.visible`
      );
      cy.xpath(`${xpath_contactPage_thanksMessage}`, { timeout: 60000 }).should(
        `be.visible`
      );
    }

    if (options.validateFailure) {
      // These are all the validations for forename
      if (options.validateFailure.forename) {
        cy.xpath(`${xpath_contactPage_forenameValidation}`).should(
          `be.visible`
        );
      }

      // These are the validations for email
      if (options.validateFailure.email) {
        if (options.validateFailure.email.emptyField) {
          cy.xpath(`${xpath_contactPage_emptyEmailValidation}`).should(
            `be.visible`
          );
        }
        if (options.validateFailure.email.incorrectFormat) {
          cy.xpath(`${xpath_contactPage_incorrectEmailValidation}`).should(
            `be.visible`
          );
        }
      }

      if (options.validateFailure.message) {
        cy.xpath(`${xpath_contactPage_messageValidation}`).should(`be.visible`);
      }

      // Ensure that the form is not being submitted
      cy.xpath(`${xpath_contactPage_sendingFeedbackHeading}`).should(
        `not.exist`
      );
      cy.xpath(`${xpath_contactPage_thanksMessage}`, { timeout: 60000 }).should(
        `not.exist`
      );
    }
  }
};

// **************************** Shop Page Specific Functions **************************** //
/**
 *
 * @param nameOfItem
 */
export const addItemToCart = (nameOfItem: string) => {
  cy.log(`**FUNCTION: addItemToCart()**`);

  // Record the existing number of items in the cart
  let numberOfItemsInCart = 0;
  cy.wait(0).then(() => {
    cy.xpath(`${xpath_topNavBar_cartItemCount}`)
      .invoke(`text`)
      .then(($JQueryVariable) => {
        numberOfItemsInCart = parseInt($JQueryVariable);
      });
  });
  cy.xpath(
    `//h4[text() = '${nameOfItem}']//following::p[1]//*[text()="Buy"]`
  ).click();

  // Check to make sure that the number of items in the cart has incremented by 1
  cy.wait(0).then(() => {
    cy.xpath(`${xpath_topNavBar_cartItemCount}`)
      .invoke(`text`)
      .then(($JQueryVariable) => {
        // numberOfItemsInCart = parseInt($JQueryVariable);
        expect(parseInt($JQueryVariable)).to.equal(numberOfItemsInCart + 1);
      });
  });
};

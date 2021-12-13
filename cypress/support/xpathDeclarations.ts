// **************************** Top Navbar elements **************************** //
export const xpath_homePageLogo = `//img[@src="images/logo.png"]`;
export const xpath_topNavBar_contactButton = `//li[@id="nav-contact"]`;
export const xpath_topNavBar_homeButton = `//li[@id="nav-home"]`;
export const xpath_topNavBar_shopButton = `//li[@id="nav-shop"]`;
export const xpath_topNavBar_cartButton = `//li[@id="nav-cart"]`;
export const xpath_topNavBar_cartItemCount = `(//li[@id="nav-cart"]//following::span)[1]`;

// **************************** Homepage Elements **************************** //
export const xpath_homePageH1 = `//h1[text()="Jupiter Toys"]`;

// **************************** Contact Page Elements **************************** //
export const xpath_contactPage_forename = `//input[@id="forename"]`;
export const xpath_contactPage_surname = `//input[@id="surname"]`;
export const xpath_contactPage_email = `//input[@id="email"]`;
export const xpath_contactPage_telephone = `//input[@id="telephone"]`;
export const xpath_contactPage_message = `//textarea[@id="message"]`;
export const xpath_contactPage_submitButton = `//div[@class="form-actions"]/*[text()="Submit"]`;
// ---------- Contact Form Validations ---------- //
export const xpath_contactPage_forenameValidation = `//span[text()="Forename is required"]`;
export const xpath_contactPage_emptyEmailValidation = `//span[text()="Email is required"]`;
export const xpath_contactPage_incorrectEmailValidation = `//span[text()="Please enter a valid email"]`;
export const xpath_contactPage_messageValidation = `//span[text()="Message is required"]`;
// === Sunny Day Validation === //
export const xpath_contactPage_sendingFeedbackHeading = `//h1[text()="Sending Feedback"]`;
export const xpath_contactPage_thanksMessage = `//div[@class="alert alert-success"]`;

// **************************** Shop Page **************************** //
export const xpath_shopPage_1stItem = `(//li//img)[1]`;
export const xpath_shopPage_8stItem = `(//li//img)[8]`;

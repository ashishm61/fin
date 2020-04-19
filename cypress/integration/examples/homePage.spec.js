/// <reference types="cypress" />
import LoginPage from "../../page-object/LoginPage";
import LogoutPage from "../../page-object/LogoutPage";

describe("Login and Logout Page Test suite", function() {
  before(function() {
    //it is to load fixture file
    cy.fixture("example").then(function(data) {
      this.data = data;
      
    });
  });

  it("Valid Login Test", function() {
    const loginPage = new LoginPage();
    loginPage.visit(Cypress.env("devUrl"));
    loginPage.fillEmail(this.data.userName);
    loginPage.fillPassword(this.data.password);
    loginPage.clickSubmit();
    cy.url().should("include", "/dashboard");
  });

  after(function() {
    const logOut = new LogoutPage();
    logOut.logoutPage();
    cy.url().should("include", "/login#");
  });
});

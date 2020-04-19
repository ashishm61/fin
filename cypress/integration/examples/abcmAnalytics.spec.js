import LoginPage from "../../page-object/LoginPage";
import LogoutPage from "../../page-object/LogoutPage";
import Dashborad from "../../page-object/Dashboard";

describe("Dashborad Test suite", function() {
  const loginPage = new LoginPage();
  const dbClass = new Dashborad();
  before(function() {
    cy.fixture("example").then(function(data) {
      this.data = data;
    });
  });

  before(function() {
    cy.log("2nd before");
    loginPage.visit(Cypress.env("devUrl"));
    loginPage.fillEmail(this.data.userName);
    loginPage.fillPassword(this.data.password);
    loginPage.clickSubmit();
    cy.wait(2000);
  });

  after(function() {
    const logout = new LogoutPage();
    logout.logoutPage();
    cy.url().should("include", "/login#");
  });
  it("abcm analytics url validation", function() {
    dbClass.clickAbcmAnalytics();
    cy.url().should("include", "/abcm-result");
  });
});

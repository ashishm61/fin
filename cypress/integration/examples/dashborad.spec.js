import "cypress-wait-until";
/// <reference types="cypress" />
import LoginPage from "../../page-object/LoginPage";
import LogoutPage from "../../page-object/LogoutPage";
import Dashborad from "../../page-object/Dashboard";

describe("Dashborad Test suite", function() {
  before(function() {
    cy.fixture("example").then(function(data) {
      this.data = data;
    });
  });

  it("Dashboard title validation", function() {
    const loginPage = new LoginPage();
    const dbClass = new Dashborad();
    loginPage.visit(Cypress.env("devUrl"));
    loginPage.fillEmail(this.data.userName);
    loginPage.fillPassword(this.data.password);
    loginPage.clickSubmit();
    dbClass.checkDashboardTitle().should("include", "/dashboard");
    cy.wait(30000);
    cy.get('[class="d-block f-16 font-weight-bold"]').should("have.length", 6);
    dbClass
      .checkDashboradCards()
      .find('[class="card shadow-sm border-0 px-3 pt-2 pb-3 active"]')
      .contains("Inefficiencies")
      .click();
    cy.get('[class="f-16 font-weight-medium grey-5"]').should(
      "include.text",
      "Inefficiencies"
    );
    cy.get('.mt-2').should('include.text', 'Recall').and('include.text', 'Return')
    dbClass
      .checkDashboradCards()
      .find('[class="d-block f-16 font-weight-bold"]')
      .contains("Non-Cash")
      .click();
    cy.get('[class="f-16 font-weight-medium grey-5"]').should(
      "include.text",
      "Non-Cash"
    );
    cy.get('.mt-2').should('include.text', 'Borrow').and('include.text', 'Loan')

    dbClass
      .checkDashboradCards()
      .find('[class="d-block f-16 font-weight-bold"]')
      .contains("Maturing Trade")
      .click();
    cy.get('[class="f-16 font-weight-medium grey-5"]').should(
      "include.text",
      "Maturing Trade"
    );
    cy.get('.mt-2').should('include.text', 'Total Notional')
    dbClass
      .checkDashboradCards()
      .find('[class="d-block f-16 font-weight-bold"]')
      .contains("Open Trade")
      .click();
    cy.get('[class="f-16 font-weight-medium grey-5"]').should(
      "include.text",
      "Open Trade"
    );
    cy.get('.mt-2').should('include.text', 'Total Notional')
    dbClass
      .checkDashboradCards()
      .find('[class="d-block f-16 font-weight-bold"]')
      .contains("ABC Portfolio")
      .click();
    cy.get('[class="f-16 font-weight-medium grey-5"]').should(
      "include.text",
      "ABC Portfolio"
    );
    cy.get('.mt-2').should('include.text', 'ABC Source').and('include.text', 'ABC Source')
    
    dbClass
      .checkDashboradCards()
      .find('[class="d-block f-16 font-weight-bold"]')
      .contains("Box")
      .click();
    cy.get('[class="f-16 font-weight-medium grey-5"]').should(
      "include.text",
      "Box"
    );
    cy.get('.mt-2').should('include.text', 'Availability').and('include.text', 'Needs')
    
    dbClass.checkPortfolioStatus();
    cy.url().should("include", "/abc-portfolio");
  });
});

after(function() {
  const logout = new LogoutPage();
  logout.logoutPage();
  cy.url().should("include", "/login#");
});

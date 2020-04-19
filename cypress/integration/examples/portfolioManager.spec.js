import LoginPage from "../../page-object/LoginPage";
import LogoutPage from "../../page-object/LogoutPage";
import Dashborad from "../../page-object/Dashboard";
import PortfolioManager from "../../page-object/PortfolioManager";
import "cypress-file-upload";

describe("Dashborad Test suite", function() {
  before(function() {
    cy.fixture("example").then(function(data) {
      this.data = data;
    });
  });
  it("portfolio-manager url validation", function() {
    const loginPage = new LoginPage();
    const dbClass = new Dashborad();
    const pfManagerClass = new PortfolioManager();
    loginPage.visit(Cypress.env("devUrl"));
    loginPage.fillEmail(this.data.userName);
    loginPage.fillPassword(this.data.password);
    loginPage.clickSubmit();
    cy.wait(2000);
    dbClass.clickOnPFManager();
    cy.url().should("include", "/portfolio-manager");
    cy.wait(2000);
    //const fileName = "portfolio_automation_20200318.csv";
    //cy.get('[class="font-weight-medium link"]').click();
    // cy.fixture("portfolio_automation_20200318.csv").then(function(fileContent) {
    //   cy.get('[id="portfolio-manager-upload"]').upload({
    //     fileContent,
    //     fileName: "portfolio_automation_20200318.csv",
    //     mimeType: "json/csv"
    //   });
    // });

    const fileName = 'portfolio_automation_20200318.csv';
      const fileType = 'application/csv';
      const fileInput = 'input[type=file]';

      cy.upload_file(fileName, fileType, fileInput);

    // pfManagerClass
    //   .buttonPortfolioManager()
    //   .contains("ABCM")
    //   .click();
    // cy.url().should("include", "/abcm-result");
    // cy.go("back");
    // cy.wait(2000);
    // pfManagerClass
    //   .buttonDashboradDetails()
    //   .contains("Dashboard")
    //   .click();
    // cy.url().should("include", "/dashboard");
    // cy.go("back");
    // cy.wait(2000);
    // pfManagerClass
    //   .buttonDashboradDetails()
    //   .contains("Details")
    //   .click();
    // cy.url().should("include", "/abc-portfolio");
    // cy.go("back");
  });
});

after(function() {
  const logout = new LogoutPage();
  logout.logoutPage();
  cy.url().should("include", "/login#");
});

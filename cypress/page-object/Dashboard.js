class DashboradPage {
  checkDashboardTitle() {
    const title = cy.get(".container-fluid")
     return cy.url();
  }

  checkPageTitle(){
    return cy.get['[class="d-flex align-items-center pt-26 pb-3 border-bottom"]']
  }

  clickOnPFManager(){
    cy.get('[title="Portfolio Manager"]').click()
    
  }

  checkDashboradCards(){
    return cy.get('[class="row dashboard-cards"]')
  }

  clickAbcmAnalytics(){
    cy.wait(5000)
    cy.get('[title="ABCM"]').contains('ABCM').click()
    cy.get('[title="ABCM Analytics"]').click()
    
  }

  clickAbcmPortfolio(){
    cy.wait(5000)
    cy.get('[title="ABCM"]').contains('ABCM').click()
    cy.get('[title="ABC Portfolio"]').click()
    
  }

  checkPortfolioStatus(){
    cy.get('[class="status"]').click();
    cy.contains('View Details').click()
  }
}


export default DashboradPage;

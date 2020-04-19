class LogoutPage {
  logoutPage() {
    cy.wait(5000)
    const logout =  cy.get('.user-detail');
    logout.click();
    cy.get('.profile-options').contains('Logout').click()
  }
}

export default LogoutPage;

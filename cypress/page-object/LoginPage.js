
class LoginPage {
  visit(value) {
    cy.visit(value);
  }
  fillEmail(value) {
    const field = cy.get("#email");
    field.clear();
    field.type(value);
    return this;
  }

  fillPassword(value) {
    const pass = cy.get("#password");
    pass.clear();
    pass.type(value);
    return this;
  }

  clickSubmit() {
    const button = cy.get("#default_FsContainedButton");
    button.click();
  }
}
export default LoginPage;

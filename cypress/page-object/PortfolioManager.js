class PortfolioManager{
    buttonPortfolioManager(){
        return cy.get('[class="btn btn-secondary btn-sm"]')
    }

    buttonDashboradDetails(){
        return cy.get('[class="btn btn-secondary btn-sm ml-20"]')
    }
}

export default PortfolioManager;
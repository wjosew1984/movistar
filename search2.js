describe("Search test cases", function() {
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas");
    })
    after(function(){
    cy.log("Ejecutando postcondiciones a las pruebas");
    })
    it("Search dresses", function(){
    cy.visit("http://automationpractice.com/index.php");
    cy.get("asearch_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains("´dress´");
    })
    it("Search hats", function(){
    cy.visit("http://automationpractice.com/index.php");
    cy.get("asearch_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains("´hat´");
    })
})

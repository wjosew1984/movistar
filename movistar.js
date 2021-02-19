/*Los ejercicios a realizar
CP001-Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A10S
Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tienda.movistar.com.ar), luego realizar la busqueda del equipo A10S e ingresar al mismo y verificar que se pueda pagar en 12 cuotas
Resultado esperado:
 - Que se pueda ingresar a la página indicada
 - Que el equipo seleccionado sea el A10S
 - Que se indique en el equipo que puede ser pagado en 12 cuotas

CP002-Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB
Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tienda.movistar.com.ar), luego utilizando los filtros de la pagina, filtrar por Gama Alta y Memoria Interna 256GB e indicar cuantos equipos devuelve la busqueda

Resultado esperado:
 - Que se pueda ingresar a la página indicada
 - Que se pueda aplicar los filtros
 - Que se obtengan equipos luego del filtrado

Límite de entrega de lo realizado el 18/02 22hs a mi cuenta de correo. (Enviar comprimido para que no bloquee el archivo .js )

Nos vemos el Viernes 11hs.
*/
describe("Search celular a31", function() {
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas,Que se pueda ingresar a la página indicada,que el equipo seleccionado sea el A10S, que se indique en el equipo que puede ser pagado en 12 cuotas");
    })
    after(function(){
        cy.log("Ejecutando todas las postcondiciones a las pruebas, Que se pueda ingresar a la página indicada,que el equipo seleccionado sea el A10S, que se indique en el equipo que puede ser pagado en 12 cuotas");
    })
    beforeEach(function(){
        cy.visit("http://automationpractice.com/index.php");
    })
    afterEach(function(){
        cy.log("Que se pueda ingresar a la página indicada,que el equipo seleccionado sea el A10S, que se indique en el equipo que puede ser pagado en 12 cuotas");
    })
    it("Search dresses", function() {
        cy.get("asearch_query_top").type("A10S");
        cy.get("#searchbox > .btn").click();
        cy.get(".lighter").contains("A10S");
    })
    it("Search hats", function() {
        cy.get("asearch_query_top").type("12 cuotas");
        cy.get("#searchbox > .btn").click();
        cy.get(".lighter").contains("12 cuotas");
    })
})
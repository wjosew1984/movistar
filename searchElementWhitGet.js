/*describe("formas de encontrar un elemento", function(){
    it("buscar en el buscador", function(){
        cy.visit("http://automationpractice.com/index.php");
        cy.get(".search_query.from-control.ac_input").type("Hola"); //Buscamos por clase
        cy.get("#search_query_top").type("Como te va"); //Buscamos por id
        cy.get("[name=´search_query´]").type("Me va muy bien"); //Buscamos por otra propiedad
        cy.get("[placeholder=´Search´]").clear(); //Clear borra lo que esta en el elemento
    })
})
Los ejercicios a realizar
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
describe("Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A10S", function(){
    it("buscar en el buscador", function(){
        cy.visit("https://tienda.movistar.com.ar/");
        cy.get("[span=´search_query´]").type("A31");
        it("Go to comprar section", function(){
        cy.get("[<span>Comprar</span>]").eq(0).click;
    })
        it("Go to Dresses section", function(){
        cy.get("[class=sf-with-ul]").eq(3).click;
        it("Go to comprar section", function(){
        cy.get("[<button id="movistar-pdp-addtocart-button" class="addtocart-button active" type="button" onclick="submitOrShowSomeModal();" style="position: relative; left: 0px;">Comprar</button>]").eq(0).click;
    })
})

describe("Testing my component",function(){
    it('clicking all buttons to check if they function properly',function(){
        
        cy.visit("https://jimbratsos.github.io/Tasks/");

        cy.get('.ButtonBig').click({ multiple: true });

        cy.get('.ButtonCBX').should('checked');
    })


    it('unclicking all buttons to see if they function properly',function(){
        cy.get('.ButtonBig').click({ multiple: true });

        cy.get('.ButtonCBX').should('not.checked');
    })

    it('clicking all buttons to check if they function properly after the above process',function(){
        cy.get('#wrapper').children('.ButtonBig').click({ multiple: true });

        cy.get('.ButtonCBX').should('checked');
    })

    it('unclicking all the buttons using x buttons',function(){
        cy.get('.buttonClose').click({ multiple: true });

        cy.get('.ButtonCBX').should('not.checked');
    })
})
describe("User API CRUD - JSONPlaceholder", () =>{
    it("POST - create user", () =>{
        
        cy.fixture('createUser').then((user) =>{
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/users',
                body:user
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('id')
                expect(response.body.name).to.eq(user.name)
                expect(response.body.email).to.eq(user.email)
            })
        })
    })
    it('PUT - update user', ()=>{
        cy.fixture('updateUser').then((updatedUser) =>{
            cy.request({
                method: 'PUT',
                url: 'https://jsonplaceholder.typicode.com/users/1',
                body: updatedUser
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq(updatedUser.name)
                expect(response.body.email).to.eq(updatedUser.email)
            })
        })
    })
    it("DELETE - delete user",()=>{
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/users/1',

        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('NEGATIVE - 404 for invalid endpoint', () =>{
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/userzzz',
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).to.eq(404)
        })
    })
    it('NEGATIVE - 400 for invalid POST payload', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            failOnStatusCode: false,
            body: {
                invalidField: '###'
            }
        }).then((response) =>{
            expect(response.body).to.not.have.property('email')
        })
    })

    it("NEGATIVE - missing required fields", () =>{
        cy.request({
            method: "POST",
            url: 'https://jsonplaceholder.typicode.com/users',
            body: {
                name: 'Ash'
            }
        }).then((response) =>{
            expect(response.body).to.not.have.property('email')
        })
    })
})
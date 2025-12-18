describe("User API Tests - JSONPlaceholder", () =>{
    it("GET - list users", () =>{
        cy.request({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.length).to.be.greaterThan(0)
            expect(response.body[0]).to.have.property('id')
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('email')
            expect(response.headers).to.have.property('content-type')

        })
    })
})

// //It is checking correctly but due to cloudflare protection it give a response status 403.

// describe('ReqRes API Tests', () =>{
//     it('GET - list user', () =>{
//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=2",
//             headers:{
//                 'accept': 'application/json',
//                 'user-agent': 'Mozilla/5.0'
//             }
//         }).then((response) =>{
//             expect(response.status).to.eq(200)
//             expect(response.body.page).to.eq(2)
//             expect(response.body.data.length).to.be.greaterThan(0)
//             expect(response.body.data[0]).to.have.property('email')
//         })
//     })
// })
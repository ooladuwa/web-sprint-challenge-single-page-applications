describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const usernameInput = () => cy.get('input[name="username"]');

  it("sanityChecks", () => {
    expect(5).to.eql(5);
    expect(1 + 2).to.equal(3);
    expect(1 + 3).to.not.equal(5);
  });
  it("get name input and type name in it", () => {
    usernameInput().should("exist");
  });
});

//   it("can type and see if the correct name", () => {
//     cy.get("input[name=username]")
//       .type("Bob Pizza")
//       .should("have.value", "Bob Pizza");
//     cy.get("input[name=email]").type("lovepizza@gmail.com");
//     cy.get("input[name=phone]").type("0123456789");
//   });
// describe('Advance Forms', () => {
//     beforeEach(() => cy.visit('http://localhost:3000'))
//     describe('filling inputs and submit', () => {

//     describe('Filling out inputs and cancelling', () => {
//         it('submit button is disabled', () => {
//             cy.get('#submit-btn').should('be.disabled')
//         })
//     })
// })

describe('Practice Test Automation Login', () => {
    // Positive Login Test
    it('should log in successfully with valid credentials', () => {
      // Navigate to the login page
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      // Enter valid username and password
      cy.get('#username').type('student'); // Valid username
      cy.get('#password').type('Password123'); // Valid password
  
      // Submit the form
      cy.get('#submit').click();
  
      // Assert that we are redirected to the correct page after successful login
      cy.url().should('include', 'https://practicetestautomation.com/logged-in-successfully/');
      
      // Verify that a success message is displayed
      cy.get('.post-title').should('contain', 'Logged In Successfully');
    });
  
    // Negative Login Test
    it('should fail login with invalid credentials', () => {
      // Navigate to the login page
      cy.visit('https://practicetestautomation.com/practice-test-login/');
  
      // Enter invalid username and password
      cy.get('#username').type('invalidUser'); // Invalid username
      cy.get('#password').type('invalidPassword'); // Invalid password
  
      // Submit the form
      cy.get('#submit').click();
  
   // Wait and check for an error message dynamically
   cy.get('#error').should('be.visible').and('contain', 'Your username is invalid!');
    });
  });
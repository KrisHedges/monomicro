describe('ui: Listitem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=listitem--primary&args=theme;children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Listitem!');
    });
});

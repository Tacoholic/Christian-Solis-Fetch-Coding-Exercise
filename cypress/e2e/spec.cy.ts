import { GamePage } from '../pages/game-page.page';

describe('template spec', () => {
  const gamePage = new GamePage();

  it('passes', () => {
    cy.visit('/');
    //Checks for correct URL path
    cy.url().should('contain', 'http://sdetchallenge.fetch.com/');
    //Assertions to check that the right elements are present
    //Checks for reset button
    gamePage.assertElementsArePresent(':nth-child(4) > #reset', 'Reset');
    //Checks for weigh button
    gamePage.assertElementsArePresent('#weigh', 'Weigh');
    //Checks for game board
    gamePage.assertElementsArePresent(
      '.game-board',
      'left bowl' && 'right bowl'
    );
    //Checks for the gold bars and numbers
    gamePage.assertElementsArePresent('#coin_0', '0');
    gamePage.assertElementsArePresent('#coin_1', '1');
    gamePage.assertElementsArePresent('#coin_2', '2');
    gamePage.assertElementsArePresent('#coin_3', '3');
    gamePage.assertElementsArePresent('#coin_4', '4');
    gamePage.assertElementsArePresent('#coin_5', '5');
    gamePage.assertElementsArePresent('#coin_6', '6');
    gamePage.assertElementsArePresent('#coin_7', '7');
    gamePage.assertElementsArePresent('#coin_8', '8');
    //Function
    gamePage.enterNumberAndCheck();
  });
});

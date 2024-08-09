///<reference types="cypress" />
//Array where I store the numbers that will be randomly chosen
const barsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// html elements of the numbers
let zero = '#coin_0';
let one = '#coin_1';
let two = '#coin_2';
let three = '#coin_3';
let four = '#coin_4';
let five = '#coin_5';
let six = '#coin_6';
let seven = '#coin_7';
let eight = '#coin_8';

export class GamePage {
  //**Asserts the text withing the pop up */
  public assertAlert() {
    return cy.on('window:alert', (txt) => {
      expect(txt).to.match(/(Yay! You find it!|Oops! Try Again!)/);
    });
  }
  //Enters numbers and then checks if they're the same or if the result value is =, > or <
  public enterNumberAndCheck() {
    let num1 = Math.floor(Math.random() * barsArray.length).toString();
    let num2 = Math.floor(Math.random() * barsArray.length).toString();
    cy.get('#left_0').clear().type(num1);
    cy.get('#right_0').clear().type(num2);
    cy.get('#weigh').click();
    //Tried passing a timeout command on line 13 instead
    //of a wait command, but getting the result to display is slow
    cy.wait(3000);
    cy.get('.result > #reset')
      .invoke('removeAttr', 'disabled')
      .invoke('text')
      .then((text) => {
        if (num1 == num2 || text === '=') {
          this.enterNumberAndCheck();
        } else if (text === '<' || '>') {
          switch (num1 || num2) {
            case '0':
              cy.get(zero).click();
              this.assertAlert();
              break;
            case '1':
              cy.get(one).click();
              this.assertAlert();
              break;
            case '2':
              cy.get(two).click();
              this.assertAlert();
              break;
            case '3':
              cy.get(three).click();
              this.assertAlert();
              break;
            case '4':
              cy.get(four).click();
              this.assertAlert();
              break;
            case '5':
              cy.get(five).click();
              this.assertAlert();
              break;
            case '6':
              cy.get(six).click();
              this.assertAlert();
              break;
            case '7':
              cy.get(seven).click();
              this.assertAlert();
              break;
            case '8':
              cy.get(eight).click();
              this.assertAlert();
              break;
          }
        }
      });
  }
  //Asserts that the elements are visible by passing the id and number
  public assertElementsArePresent(id: string, text: string) {
    cy.get(id).should('be.visible').and('contain', text);
  }
}

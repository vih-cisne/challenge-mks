import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import App from './src/App'
import Cart from "./src/components/Cart";


test("Funcionalidade do botão comprar", async () => {
  render(
    <App/>
  );

const buttonBuy = screen.getAllByRole("button")[3]
const cartTotalQuantity = screen.getByTestId('totalItems')

  expect(buttonBuy).toBeInTheDocument()
  expect(buttonBuy.textContent).toBe('Comprar')

  expect(cartTotalQuantity.textContent).toBe('0')

  setTimeout(() => {

    fireEvent.click(buttonBuy)
    expect(cartTotalQuantity.textContent).toBe('1')
    fireEvent.click(buttonBuy)
    expect(cartTotalQuantity.textContent).toBe('2')
    
  }, 2000);

});

test("Funcionalidade de incrementar do carrinho", async () => {
    render(
      <Provider store={store}><Cart showCart={true}/></Provider>
    );
  
  setTimeout(() => {

    const buttons = screen.getAllByRole("button")
    const cartTotalQuantity = screen.getByTestId('totalItems')
    expect(cartTotalQuantity.textContent).toBe('2')

    const buttonToIncrement = buttons[2]

    expect(buttonToIncrement.textContent).toBe('+')
    fireEvent.click(buttonToIncrement)
    expect(cartTotalQuantity.textContent).toBe('3')

    
  }, 2200);
  
  });

  test("Funcionalidade de decrementar do carrinho", async () => {
    render(
      <Provider store={store}><Cart showCart={true}/></Provider>
    );
  
  setTimeout(() => {

    const buttons = screen.getAllByRole("button")
    const cartTotalQuantity = screen.getByTestId('totalItems')
    expect(cartTotalQuantity.textContent).toBe('2')

    const buttonToDecrement = buttons[1]

    expect(buttonToDecrement.textContent).toBe('-')
    fireEvent.click(buttonToDecrement)
    expect(cartTotalQuantity.textContent).toBe('1')
    
  }, 2200);
  
  });

  test("Funcionalidade de remover item do carrinho", async () => {
    render(
      <Provider store={store}><Cart showCart={true}/></Provider>
    );
  
  setTimeout(() => {

    const buttons = screen.getAllByRole("button")
    const cartTotalQuantity = screen.getByTestId('totalItems')
    expect(cartTotalQuantity.textContent).toBe('1')
    const buttonToIncrement = buttons[2]

    const buttonToRemove = buttons[3]
    fireEvent.click(buttonToIncrement)
    expect(cartTotalQuantity.textContent).toBe('2')


    expect(buttonToRemove.textContent).toBe('X')
    fireEvent.click(buttonToRemove)
    expect(cartTotalQuantity.textContent).toBe('0')
    
    
  }, 2200);
  
  });

import { render, screen, prettyDOM } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

describe("App", () => {
  test("should show predicted usage", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByTestId('meter-input'), '00100');
    await user.click(screen.getByTestId('submit-button'));
    expect(screen.queryByTestId('predicted-usage')).toBeNull();
    expect(screen.getByTestId('list-100').textContent).toEqual('00100 - customer');

    await user.clear(screen.getByTestId('meter-input'));
    await user.type(screen.getByTestId('meter-input'), '00250');
    await user.click(screen.getByTestId('submit-button'));
    expect(screen.queryByTestId('predicted-usage')).toBeNull();
    expect(screen.getByTestId('list-250').textContent).toEqual('00250 - customer');


    await user.clear(screen.getByTestId('meter-input'));
    await user.type(screen.getByTestId('meter-input'), '00350');
    await user.click(screen.getByTestId('submit-button'));
    expect(screen.queryByTestId('predicted-usage')).toBeNull();
    expect(screen.getByTestId('list-350').textContent).toEqual('00350 - customer');


    await user.clear(screen.getByTestId('meter-input'));
    await user.type(screen.getByTestId('meter-input'), '00400');
    await user.click(screen.getByTestId('submit-button'));
    expect(screen.getByTestId('list-400').textContent).toEqual('00400 - customer');

    expect(screen.getByTestId('predicted-usage').textContent).toEqual('00500');
  });

  test('should show error message if input value string length is less than 5', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByTestId('meter-input'), '1');
    await user.click(screen.getByTestId('submit-button'));
    expect(screen.getByTestId('error-message').textContent).toEqual('This is an invalid meter reading.');
  });
});

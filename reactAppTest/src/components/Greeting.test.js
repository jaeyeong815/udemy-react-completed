import { render, screen } from '@testing-library/react';
import userEvnet from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello world as a text', () => {
    render(<Greeting />);
    const textElement = screen.getByText('Hello world!');
    expect(textElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing

    // Assert
    const notChangedText = screen.getByText('good to see you', { exact: false });
    expect(notChangedText).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was CLICKED', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvnet.click(buttonElement);

    // Assert
    const changedText = screen.getByText('Changed!');
    expect(changedText).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was CLICKED', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvnet.click(buttonElement);

    // Assert
    const changedOutputText = screen.queryByText('good to see you', { exact: false });
    expect(changedOutputText).toBeNull();
  });
});

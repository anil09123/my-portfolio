import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './components/Contact';

describe('Contact Component', () => {
  test('renders Contact heading', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { name: /Contact Me/i });
    expect(heading).toBeInTheDocument();
  });

  test('allows user to fill and submit the form', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const messageInput = screen.getByPlaceholderText('Your Message');
    const submitButton = screen.getByRole('button', { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello, this is a test message.');

    fireEvent.click(submitButton);
  });
});
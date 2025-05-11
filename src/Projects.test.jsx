import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './components/Projects';

describe('Projects Component', () => {
  test('renders Projects heading', () => {
    render(<Projects />);
    const heading = screen.getByRole('heading', { name: /PlanIt/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders project cards', () => {
    render(<Projects />);
    const projectCards = screen.getAllByRole('heading', { level: 2 });
    expect(projectCards.length).toBeGreaterThan(0); // Ensures at least one project card is rendered
  });
});
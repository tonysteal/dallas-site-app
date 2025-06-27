import { render, screen } from '@testing-library/react';
import { FoodDrink } from '../food-drink';

describe('FoodDrink', () => {
  test('renders food and drink section', () => {
    render(<FoodDrink />);
    
    expect(screen.getByText('Food & Drink in Dallas')).toBeInTheDocument();
    expect(screen.getByText('My favorite spots for great food and drinks around the city')).toBeInTheDocument();
  });

  test('renders cuisine navigation', () => {
    render(<FoodDrink />);
    
    expect(screen.getAllByText('American')).toHaveLength(2);
    expect(screen.getAllByText('Italian')).toHaveLength(2);
    expect(screen.getAllByText('Mexican')).toHaveLength(2);
  });

  test('renders restaurant items', () => {
    render(<FoodDrink />);
    
    expect(screen.getAllByText('The Woolworth')).toHaveLength(2);
    expect(screen.getAllByText('Nonna')).toHaveLength(2);
    expect(screen.getAllByText('Revolver Taco Lounge')).toHaveLength(2);
  });

  test('renders back to home button', () => {
    render(<FoodDrink />);
    
    const backButton = screen.getByText('Back to Home');
    expect(backButton).toBeInTheDocument();
    expect(backButton.getAttribute('href')).toBe('/');
  });
});
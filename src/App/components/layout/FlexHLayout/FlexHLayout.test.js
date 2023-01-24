import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexHLayout from './FlexHLayout';

describe('<FlexHLayout />', () => {
  test('it should mount', () => {
    render(<FlexHLayout />);
    
    const flexHLayout = screen.getByTestId('FlexHLayout');

    expect(flexHLayout).toBeInTheDocument();
  });
});
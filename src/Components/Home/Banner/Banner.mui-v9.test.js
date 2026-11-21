import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Banner from './Banner';

const mockGridProps = [];

jest.mock('@mui/material', () => {
  const React = require('react');
  const Grid = (props) => {
    mockGridProps.push(props);
    return React.createElement('div', null, props && props.children);
  };
  const Button = (props) => React.createElement('button', null, props && props.children);
  return { Grid, Button };
});

test('Banner uses the responsive Grid size API instead of legacy breakpoint props', () => {
  render(
    <MemoryRouter>
      <Banner />
    </MemoryRouter>
  );

  const gridProps = mockGridProps.filter(Boolean);
  expect(gridProps.length).toBeGreaterThan(0);
  gridProps.forEach((props) => {
    expect(props).not.toHaveProperty('item');
    expect(props).not.toHaveProperty('xs');
    expect(props).not.toHaveProperty('sm');
    expect(props).not.toHaveProperty('md');
  });

  const sizedGrids = gridProps.filter((props) => props.size);
  expect(sizedGrids).toHaveLength(2);
  expect(sizedGrids[0].size).toEqual({ xs: 12, md: 6 });
  expect(sizedGrids[1].size).toEqual({ xs: 12, md: 6 });
});

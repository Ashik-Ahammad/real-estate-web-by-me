import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Banner from './Banner';

const mockGridProps = [];

jest.mock('@mui/material', () => {
  const React = require('react');
  const Grid = (props) => {
    mockGridProps.push(props);
    return React.createElement('div', null, props.children);
  };
  const Button = (props) => React.createElement('button', null, props.children);
  return { Grid, Button };
});

test('Banner targets the v9 Grid size API on @mui/material 9.6 or newer', () => {
  const range = require('../../../../package.json').dependencies['@mui/material'];
  const [major, minor] = /(\d+)\.(\d+)\.(\d+)/.exec(range).slice(1).map(Number);
  expect(major).toBeGreaterThanOrEqual(9);
  if (major === 9) expect(minor).toBeGreaterThanOrEqual(6);

  render(<MemoryRouter><Banner /></MemoryRouter>);

  const grids = mockGridProps.filter(Boolean);
  expect(grids.length).toBeGreaterThan(0);
  grids.forEach((props) => {
    expect(props).not.toHaveProperty('item');
    expect(props).not.toHaveProperty('xs');
    expect(props).not.toHaveProperty('md');
  });
  const sized = grids.filter((props) => props.size);
  expect(sized).toHaveLength(2);
  expect(sized[0].size).toEqual({ xs: 12, md: 6 });
  expect(sized[1].size).toEqual({ xs: 12, md: 6 });
});

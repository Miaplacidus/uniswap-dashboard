import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Pools from '@/components/Pools';
import axios from 'axios';
import poolsFixture from '../fixtures/pools';

jest.mock('axios');


describe('Pools table', () => {
  beforeEach(() => {
    const response = poolsFixture;
    axios.post.mockResolvedValue({ data: response });
  })

  test('has correct header text', async () => {
    render(<Pools />);

    const header = await screen.findByText(/Pools/);
    expect(header).toBeInTheDocument();
  });

  test('has correct row data', async () => {
    render(<Pools />);

    const row = await screen.findByText(/USDT/);
    expect(row).toBeInTheDocument();
  });
});
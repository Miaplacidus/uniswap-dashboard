import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Transactions from '@/components/Transactions';
import axios from 'axios';
import transactionsFixture from '../fixtures/transactions';

jest.mock('axios');


describe('Transactions table', () => {
  beforeEach(() => {
    const response = transactionsFixture;
    axios.post.mockResolvedValue({ data: response });
  })

  test('has correct header text', async () => {
    render(<Transactions />);

    const header = await screen.findByText(/Transactions/);
    expect(header).toBeInTheDocument();
  });

  test('has correct row data', async () => {
    render(<Transactions />);

    const row = await screen.findByText(/CHOMP/);
    expect(row).toBeInTheDocument();
  });
});
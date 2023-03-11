import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Tokens from '@/components/Tokens';
import axios from 'axios';
import tokensFixture from '../fixtures/tokens';

jest.mock('axios');


describe('Tokens table', () => {
  beforeEach(() => {
    const response = tokensFixture;
    axios.post.mockResolvedValue({ data: response });
  })

  test('has correct header text', async () => {
    render(<Tokens />);

    const header = await screen.findByText(/Tokens/);
    expect(header).toBeInTheDocument();
  });

  test('has correct row data', async () => {
    render(<Tokens />);

    const firstRow = await screen.findByText(/UMIIE/);
    expect(firstRow).toBeInTheDocument();
  });
});
import { render, screen } from '@testing-library/react';

jest.mock('../../api/client', () => ({
  __esModule: true,
  default: { get: jest.fn() },
}));

import AllContents from '../Content/AllContents';
import apiClient from '../../api/client';

describe('AllContents', () => {
  test('displays rows after fetch', async () => {
    apiClient.get.mockResolvedValueOnce({ data: [{ Id: 1, Name: 'Test Movie' }] });

    render(<AllContents />);

    expect(apiClient.get).toHaveBeenCalledWith('/contents');

    const row = await screen.findByText('Test Movie');
    expect(row).toBeInTheDocument();
  });
});

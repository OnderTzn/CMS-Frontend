import { render, screen } from '@testing-library/react';

jest.mock('../../api/client', () => ({
  __esModule: true,
  default: { get: jest.fn() },
}));

import ShowLicenses from '../License/ShowLicenses';
import apiClient from '../../api/client';

describe('ShowLicenses', () => {
  test('displays rows after fetch', async () => {
    apiClient.get.mockResolvedValueOnce({ data: [{ Id: 1, Name: 'Basic License' }] });

    render(<ShowLicenses />);

    expect(apiClient.get).toHaveBeenCalledWith('/licenses');

    const row = await screen.findByText('Basic License');
    expect(row).toBeInTheDocument();
  });
});

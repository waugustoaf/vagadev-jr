import { render, screen } from '@testing-library/react';
import { CustomThemeProvider } from '../../styles/theme';
import { Card } from '.';

describe('Card component', () => {
  it('render correctly', async () => {
    render(
      <CustomThemeProvider>
        <Card backImage="https://github.com/waugustoaf.png" title="My Title" />
      </CustomThemeProvider>,
    );

    expect(screen.getByText('My Title')).toBeInTheDocument();
  });
});

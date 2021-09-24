import { render, screen } from '@testing-library/react';
import { FiUser } from 'react-icons/fi';
import { Input } from '.';
import { CustomThemeProvider } from '../../../styles/theme';

describe('Input component', () => {
  it('renders correctly', () => {
    const { debug } = render(
      <CustomThemeProvider>
        <Input
          error={{}}
          getValues={() => 'Name'}
          icon={FiUser}
          register={() => {}}
          name="name"
          placeholder="Insira seu nome"
        />
      </CustomThemeProvider>,
    );

    const inputComponent = screen.getByTestId('input-container');
    expect(inputComponent).toHaveStyle('border: 2px solid #084154;');
  });
});

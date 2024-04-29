import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from 'platform-bible-react';

describe('Button', () => {
  it('renders button text correctly', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('handles click event correctly', () => {
  //   const handleClick = jest.fn();
  //   const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);

  //   fireEvent.click(getByText('Click me'));

  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});

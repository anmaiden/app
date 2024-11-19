import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('button is render', () => {
        render(<Button>test btn</Button>);
        expect(screen.getByText('test btn')).toBeInTheDocument();
    });

    test('button with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>test btn</Button>);
        expect(screen.getByText('test btn')).toHaveClass('clear');
        screen.debug();
    });
});

import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('with text', () => {
        render(<Button>test btn</Button>);
        expect(screen.getByText('test btn')).toBeInTheDocument();
    });
});

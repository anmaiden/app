import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('test: sidebar is render', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test: sidebar is toggle', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import NavBar from 'widgets/NavBar';
import SideBar from 'widgets/SideBar';
import { Suspense } from 'react';
import AppRouter from './router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="container-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

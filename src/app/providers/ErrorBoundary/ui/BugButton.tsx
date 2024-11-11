import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

//  info: testing component for Error

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const handleThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={handleThrow}>
            {t('Throw new Error')}
        </Button>
    );
};

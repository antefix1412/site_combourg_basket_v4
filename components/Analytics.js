import { useEffect } from 'react';
import { getCookie } from 'cookies-next';

export default function Analytics() {
    useEffect(() => {
        if (getCookie('cookie_consent') === 'accepted') {
            console.log("Google Analytics activé !");
            // Ici, ajoute le script Google Analytics
        }
    }, []);

    return null;
}

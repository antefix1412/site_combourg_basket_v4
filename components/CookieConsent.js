import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        // Vérifie si le consentement est déjà donné
        if (localStorage.getItem('cookie_consent')) {
            setShowBanner(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setShowBanner(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie_consent', 'rejected');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#000',
            color: '#fff',
            padding: '15px',
            textAlign: 'center'
        }}>
            <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur.</p>
            <button onClick={handleAccept}>Accepter</button>
            <button onClick={handleReject}>Refuser</button>
        </div>
    );
}

import { getCookie } from 'cookies-next';

export default function handler(req, res) {
    const consent = getCookie('cookie_consent', { req, res });

    if (consent === 'accepted') {
        res.status(200).json({ message: "L'utilisateur a accepté les cookies." });
    } else {
        res.status(403).json({ message: "L'utilisateur a refusé les cookies." });
    }
}


export default async function handler(req: any, res: any) {
    try {
        const clientId = process.env.GOOGLE_CLIENT_ID;
        if (!clientId) throw new Error('GOOGLE_CLIENT_ID is not set in environment variables');

        const redirectUri = 'https://pruebas-bice-eight.vercel.app/api/auth/callback';
        const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
        const responseType = 'code';
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&access_type=offline`;

        res.redirect(authUrl);
    } catch (error) {
        console.error('Error in handler:', error);
        res.status(500).send('Internal Server Error');
    }
}
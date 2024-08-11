export default async function handler(req: any, res: any) {
  const { code } = req.query as { code: string };

  const clientId = process.env.GOOGLE_CLIENT_ID as string;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
  const redirectUri: string = 'https://pruebas-bice-eight.vercel.app/api/auth/callback';

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return res.status(400).json(tokenData);
  }

  // Guardar el token en la sesión del usuario o hacer otras operaciones
  res.redirect(`/profile?token=${tokenData.access_token}`);
}

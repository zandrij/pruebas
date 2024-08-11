import { useEffect, useState } from 'react';

export default function Profile({ token }: { token: string }) {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    async function fetchUserInfo() {
      const response = await fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setUserInfo(data);
    }

    if (token) {
      fetchUserInfo();
    }
  }, [token]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userInfo.name}</h1>
      <img src={userInfo.picture} alt="Profile Picture" />
      <p>Email: {userInfo.email}</p>
    </div>
  );
}

Profile.getInitialProps = ({ query }: {query: {token: string}}) => {
  return { token: query.token };
};

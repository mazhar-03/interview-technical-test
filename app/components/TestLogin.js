'use client';
import { useEffect, useState } from 'react';

export default function TestLogin() {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState('');

  async function getAccessToken() {
    const res = await fetch('https://kangurus.com/technical-interviews/api/access-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: 'cl13nT',
        client_secret: '53c!r3t',
        grant_type: 'client_credentials',
      }),
    });

    const data = await res.json();
    return data.access_token;
  }

  async function loginPlayer(accessToken, username, password) {
    const res = await fetch('https://kangurus.com/technical-interviews/api/player/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    return data;
  }

  async function fetchPlayerInfo(accessToken, playerId) {
    const res = await fetch(`https://kangurus.com/technical-interviews/api/player?id=${playerId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();
    return data;
  }

  useEffect(() => {
    async function testLoginFlow() {
      try {
        const token = await getAccessToken();
        const login = await loginPlayer(token, 'john.doe@example.com', 'p4s5W0rDL33t');

        if (!login.id) {
          throw new Error('Login failed: ' + JSON.stringify(login));
        }

        const player = await fetchPlayerInfo(token, login.id);
        setPlayer(player);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    testLoginFlow();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="text-white p-4">
      <h2>Logged in Player Info</h2>
      <p>Name: {player.firstName} {player.lastName}</p>
      <p>Email: {player.email}</p>
      <p>ID: {player.id}</p>
    </div>
  );
}

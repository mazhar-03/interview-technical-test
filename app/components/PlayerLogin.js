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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Access token error: ${res.status} - ${errorText}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function login(accessToken, username, password) {
  const res = await fetch('https://kangurus.com/technical-interviews/api/player/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Login error: ${res.status} - ${errorText}`);
  }

  const data = await res.json();
  return data;
}

async function getSpecificUser(accessToken, playerId) {
  const res = await fetch(`https://kangurus.com/technical-interviews/api/player?id=${playerId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Fetch player error: ${res.status} - ${errorText}`);
  }

  const data = await res.json();
  return data;
}

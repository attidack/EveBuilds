import React from 'react';

function Login() {
  const clientId = 'dbcc947347cb47f4b3f70ac75b04e8a8';
  const scopes = [
    'esi-wallet.read_character_wallet.v1',
    'esi-industry.read_character_jobs.v1',
    'esi-markets.read_character_orders.v1',
    'esi-characters.read_corporation_roles.v1',
    'esi-industry.read_character_mining.v1',
    'esi-industry.read_corporation_mining.v1',
  ];

  const loginUrl = `https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:5000/auth/callback&client_id=${clientId}&scope=${scopes.join('%20')}`;

  return (
    <div>
      <h1>Login with Eve Online SSO</h1>
      <a href={loginUrl}>Login</a>
    </div>
  );
}

export default Login;
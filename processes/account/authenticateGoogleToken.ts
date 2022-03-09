export const authenticateGoogleToken = async (token: string) => {
	let res = await fetch(
		`https://www.googleapis.com/oauth2/v3/userinfo?access_token="` +
			token +
			`"`,
	);
	let json = await res.json();
	console.log(json.email);
	return json.email;
};

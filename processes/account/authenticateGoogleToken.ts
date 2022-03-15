import axios from "axios";

export const authenticateGoogleToken = async (token: string) => {
	let res = await axios(
		`https://www.googleapis.com/oauth2/v3/userinfo?access_token="` +
			token +
			`"`,
	);
	let json = res.data;
	console.log(json.email);
	return json.email;
};
export const accessOauthMetadata = async (token: string) => {
	let res = await axios(
		`https://www.googleapis.com/oauth2/v3/userinfo?access_token="` +
			token +
			`"`,
	);
	let json = res.data;
	return json;
};

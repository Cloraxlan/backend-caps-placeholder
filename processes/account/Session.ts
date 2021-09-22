import User, { SessionToken } from "../../interfaces/User";
import { v4 as uuidv4, v4 } from "uuid";

//2 weeks default duration
export const generateToken: (duration?: number) => SessionToken = (
	duration: number = 1000 * 60 * 60 * 24 * 7,
) => {
	console.log(new Date().getTime());
	console.log(duration);
	return {
		expires: new Date().getTime() + duration,
		value: v4(),
	};
};
//TODO, use only token....
export default class Session {
	private _user: User;
	private _expired: boolean;
	private _token: SessionToken;
	constructor(user: User, token: SessionToken) {
		this._user = user;
		this._token = token;
		if (token.expires > new Date().getTime()) {
			this._expired = false;
		} else {
			this._expired = true;
		}
	}
	get user(): User {
		return this._user;
	}
	get expired(): boolean {
		return this._expired;
	}
}

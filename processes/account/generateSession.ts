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

export default class Session {
	private _user: User;
	constructor(user: User) {
		this._user = user;
	}
	get user(): User {
		return this._user;
	}
}

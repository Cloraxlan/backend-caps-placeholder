import User, { SessionToken } from "../../interfaces/User";
import { v4 as uuidv4, v4 } from "uuid";
import { connection } from "../mongoConnection";

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

const DATABASE = "caps-placeholder";
const COLLECTION = "Users";

//TODO, use only token....
export default class Session {
	private _expired: boolean;
	private _token: SessionToken;
	//Constant, do updateUser() to get latest info from database
	//private _user: User;
	constructor(token: SessionToken) {
		this._token = token;
		if (token.expires > new Date().getTime()) {
			this._expired = false;
		} else {
			this._expired = true;
		}
	}
	//Get data from database not given
	public async updateUser(): Promise<User> {
		let userConnection = (await connection).db(DATABASE).collection(COLLECTION);

		let user = (await userConnection.find({
			"tokens.value": this._token,
		})) as unknown as User;
		console.log(user);
		return user;
	}
	/*get user(): User {
		return this._user;
	}*/
	get expired(): boolean {
		return this._expired;
	}
}

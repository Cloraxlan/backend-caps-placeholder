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
	private _email: string;
	//Constant, do updateUser() to get latest info from database
	//private _user: User;
	constructor(email: string) {
		this._email = email;
	}

	//Get data from database not given
	public async updateUser(): Promise<User> {
		let userConnection = (await connection).db(DATABASE).collection(COLLECTION);

		let user = (await (
			await userConnection.find({
				email: this._email,
			})
		).next()) as unknown as User;
		console.log(user);
		return user;
	}
	public async isCreated() {
		if (await this.updateUser()) {
			return true;
		}
		return false;
	}
	public static async getEmailFromToken(token: string) {
		let userConnection = (await connection).db(DATABASE).collection(COLLECTION);

		let user = await userConnection.findOne({
			tokens: { $in: [token] },
		});
		return (user as User).email;
	}
	public async genToken() {
		let token = generateToken();
		let user = await this.updateUser();
		(await user).tokens.push(token);
		let userConnection = (await connection).db(DATABASE).collection(COLLECTION);

		await userConnection.findOneAndReplace(
			{
				email: this._email,
			},
			user,
		);
		return token;
	}
}

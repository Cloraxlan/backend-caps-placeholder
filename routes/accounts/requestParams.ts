import { SessionToken } from "../../interfaces/User";
//Paramaters to refrence on front end for body params
export interface createAccount {
	email: string;
	name: string;
	tokens: Array<SessionToken>;
}
export interface login {}

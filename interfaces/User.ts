import Recipe, {
	serialRecipe,
} from "../../caps-placeholder/src/Interfaces-Classes/Recipe";

export default interface User {
	email: string;
	name: string;
	tokens: Array<SessionToken>;
	savedRecipeDates: RecipeDate[];
}
export interface RecipeDate {
	recipe: serialRecipe;
	date: string;
}
export interface SessionToken {
	// v4 UUID
	//import { v4 as uuidv4 } from 'uuid';
	value: string;
	//Unix epoch time when token expires
	expires: number;
}

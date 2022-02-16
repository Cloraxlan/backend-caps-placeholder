import Recipe, {
	serialRecipe,
} from "../../../caps-placeholder/src/Interfaces-Classes/Recipe";
import User from "../../interfaces/User";
import { connection } from "../../processes/mongoConnection";

const DATABASE = "caps-placeholder";
const COLLECTION = "Recipes";
export const findAll = async () => {
	let userConnection = (await connection).db(DATABASE).collection(COLLECTION);
	let recipes: serialRecipe[] = [];
	userConnection.find().forEach((doc) => {
		recipes.push(doc as serialRecipe);
	});
	return recipes;
};

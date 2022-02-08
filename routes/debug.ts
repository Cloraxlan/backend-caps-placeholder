import { Router } from "express";

import Recipe, {
	constructIngredientFromString,
	serialRecipe,
} from "../../caps-placeholder/src/Interfaces-Classes/Recipe";
let y = new Recipe(
	"CandeesCade",
	"The red lines are blood",
	[
		constructIngredientFromString("5 cups sugar"),

		constructIngredientFromString("10 pints of enemie's blood"),
	],
	["run", "and hide"],
	{ baseServings: 2 },
);
console.log(y.ingredients);
y.ingredients.map((i) => {
	i.fullName();
});
export default Router().get("/", async (req, res) => {
	let x: serialRecipe[] = [
		new Recipe(
			"Jeremisu",
			"Yummy yummy Jeremy",
			[constructIngredientFromString("1 yummy jeremy")],
			["make jeremy", "cook jeremy"],
			{ baseServings: 2 },
		).serialize(),
		new Recipe(
			"Popkornrad",
			"Pop Pop!",
			[
				constructIngredientFromString("5 gallons of	 corn"),
				constructIngredientFromString("50 g butter"),
			],
			["pop", "and corn"],
			{},
		).serialize(),
		new Recipe(
			"CandeesCade",
			"The red lines are blood",
			[
				constructIngredientFromString("5 cups sugar"),

				constructIngredientFromString("10 pints of enemie's blood"),
			],
			["run", "and hide"],
			{ baseServings: 2 },
		).serialize(),
	];
	res.json(x);
});

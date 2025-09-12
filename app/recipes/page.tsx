import React from "react";
import RecipeCard from "../components/RecipeCard";

export interface Recipe {
    id: number,
    name: string,
    ingredients: string[],
    instructions: string[],
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: string[],
    image: string,
    rating: number,
    mealType: string[],
};
const page = async () => {


    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json(); 
    const recipes: Recipe[] = data.recipes; 

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-4 p-4">
                {recipes.map( (recipe : Recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}    
            </section>
        </>
    )
};

export default page;

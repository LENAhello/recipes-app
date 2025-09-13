import React from "react";
import RecipeCard from "../components/RecipeCard";
import SearchForm from "../components/SearchForm";

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
const page = async ({ searchParams} : {searchParams: Promise<{ q?: string }>}) => {

    const query = (await searchParams).q;
    const param = query || '';
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${param}`);
    const data = await response.json(); 
    const recipes: Recipe[] = data.recipes; 

    return (
        <>
            <SearchForm query={query}/>
            {query && (
                <p className="mb-4 text-gray-600">
                    Showing results for <span className="font-semibold">"{query}"</span>
                </p>
            )}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-4 p-4">
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))
                ) : (
                    <p>No recipes found.</p>
                )} 
            </section>
        </>
    )
};

export default page;

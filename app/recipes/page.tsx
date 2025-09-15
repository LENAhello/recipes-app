import React from "react";
import RecipeCard from "../components/RecipeCard";
import SearchForm from "../components/SearchForm";
import Link from "next/link";

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

const PAGE_SIZE = 6;
const page = async ({ searchParams} : {searchParams: Promise<{ q?: string; page?: string }>}) => {
    const page = (await searchParams).page;
    const pageparseInt = parseInt(page || "1");
    const skip = (pageparseInt - 1) * PAGE_SIZE;

    const query = (await searchParams).q;
    const param = query || '';
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${param}&limit=${PAGE_SIZE}&skip=${skip}`);
    const data = await response.json(); 
    const recipes: Recipe[] = data.recipes; 

    const total: number = data.total || 0;
    const totalPages = Math.ceil(total / PAGE_SIZE);

    return (
        <div className="flex flex-col justify-center items-center">
        
            <SearchForm query={query}/>
        
            {recipes.length > 0 ? (
                <section className="grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-4 p-4 ">
                    {recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </section>
                ) : (
                <div className="w-[70%] ">
                    <p className="text-center text-gray-500 bg-gray-50 border border-dashed border-emerald-400 rounded-lg py-6 px-4 shadow-sm m-auto">
                        No recipes found. Try another search 🔎
                    </p>
                </div>
                )
            } 

            {/* Pagination Buttons */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }, (_, i) => (
                    <Link
                        key={i}
                        href={`/recipes?q=${param}&page=${i + 1}`}
                        className={`px-4 py-2 rounded-lg border ${
                            pageparseInt === i + 1 ? "bg-emerald-500 text-white" : "bg-white text-gray-700"
                        }`}
                    >
                        {i + 1}
                    </Link>
                ))}
            </div>
            
        </div>
    )
};

export default page;

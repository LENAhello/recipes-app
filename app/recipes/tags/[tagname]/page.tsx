import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Recipe } from "../../page"; // reuse your type (or move it to types.ts)
import RecipeCard from "@/app/components/RecipeCard";

const page = async ({ params }: {params: Promise<{ tagname: string }>}) => {

    const { tagname } = await params;
    const tagnamedecode = decodeURIComponent(tagname);
    const response = await fetch("https://dummyjson.com/recipes?limit=0");

    if (!response.ok) return notFound();
      
    const data = await response.json(); 
    const recipes: Recipe[] = data.recipes; 

    // Filter by tag
    const recipesByTag = recipes.filter((r) =>
        r.tags.some((t) => t.toLowerCase().includes(tagnamedecode.toLowerCase()))
    );
    const recipesCount = recipesByTag.length;
    //if (recipesByTag.length === 0) return notFound();

    return (
        <div>
            <h1 className="text-3xl text-gray-800 my-6 text-center">
                {recipesCount} recipes found in{" "}
                <span className="text-emerald-600 border-b-4 border-emerald-300">
                    {tagnamedecode}
                </span>
            </h1>
            
            <section className="grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-4 p-4 ">
                {recipesByTag.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </section>
        </div>
    );
};

export default page;

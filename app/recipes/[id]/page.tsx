import { notFound } from "next/navigation";
import React from "react";
import { Recipe } from "../page"; // reuse your type (or move it to types.ts)
import Image from "next/image";

interface RecipePageProps {
  params: { id: string };
}

const page = async ({ params }: RecipePageProps) => {

    const response = await fetch(`https://dummyjson.com/recipes/${params.id}`);
    const recipe: Recipe = await response.json();

    const {
        name,
        image,
        cuisine,
        rating,
        prepTimeMinutes,
        cookTimeMinutes,
        tags,
        ingredients,
        instructions,
        difficulty
    } = recipe;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>

            <div className="relative rounded-lg h-86 overflow-hidden mb-6">
                <img src={image} alt={name} className="object-contain w-full" />
            </div>

            <p className="text-gray-600 mb-2">
                Cuisine: {cuisine} • Difficulty: {difficulty}
            </p>
            <p className="text-gray-600 mb-2">
                Prep: {prepTimeMinutes} mins • Cook: {cookTimeMinutes} mins
            </p>
            <p className="text-gray-600 mb-4">⭐ {rating}</p>

            <div className="flex flex-wrap gap-2 mt-2">
                {tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <h2 className="text-xl font-semibold my-2 ">Ingredients</h2>
            <ul className="list-disc list-inside mb-6">
                    {ingredients.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
                {instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default page;

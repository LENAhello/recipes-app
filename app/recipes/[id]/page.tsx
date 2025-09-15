import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Recipe } from "../page"; // reuse your type (or move it to types.ts)

const page = async ({ params }: {params: Promise<{ id: string }>}) => {

    const { id } = await params;
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!response.ok) return notFound();
      
    const recipe: Recipe = await response.json();

    if (!recipe || !recipe.id) return notFound();

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
            <h1 className="text-3xl mb-4">{name}</h1>

            <div className="relative rounded-lg h-86 overflow-hidden mb-6">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center"
                />
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
                    <Link
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        href={`/recipes/tags/${tag}`}
                    >
                        {tag}
                    </Link>
                ))}
            </div>
            <h2 className="text-xl my-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-6 font-light">
                    {ingredients.map((item, i) => (
                <li className="font-light" key={i}>{item}</li>
                ))}
            </ul>

            <h2 className="text-xl mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
                {instructions.map((step, i) => (
                    <li className="font-light" key={i}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default page;

import React from "react";
import Image from "next/image";
import { Recipe } from "../recipes/page";
import Link from 'next/link';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard = ({recipe}: RecipeCardProps) => {

    const {
        id,
        name,
        image,
        cuisine,
        rating,
        prepTimeMinutes,
        cookTimeMinutes,
        tags,
    } = recipe;

    return (
        <div className="border border-emerald-800 rounded-2xl p-2">
          {/* Recipe image */}
          <div className="relative w-full h-68 rounded-xl overflow-hidden">
            <img
                src={image}
                alt={name}
                className="object-contain"
            />
          </div>
    
          {/* Recipe info */}
          <div className="mt-4 flex flex-col gap-2">
            <Link href={`/recipes/${id}`}>
                <h2 className="text-xl font-semibold">{name}</h2>
            </Link>
            <p className="text-sm text-gray-500">{cuisine}</p>
    
            {/* Cooking time */}
            <p className="text-sm text-gray-600">
                ⏱ {prepTimeMinutes + cookTimeMinutes} mins • ⭐ {rating}
            </p>
    
            {/* Tags */}
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
          </div>
        </div>
      );
};

export default RecipeCard;

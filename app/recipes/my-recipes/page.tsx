import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
            <div className="bg-gray-50 border border-dashed border-emerald-400 rounded-2xl shadow-sm max-w-md w-full p-8 text-center">
                <Heart className="mx-auto mb-4 text-emerald-500 w-10 h-10" />

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                No Recipes Yet
                </h1>

                <p className="text-gray-600 mb-6">
                You haven’t added any recipes to your collection.  
                Start exploring and save your favorites here!
                </p>

                {/* TODO: 

                 ** For future update
                 ** add real db so that users can save recipes 
                */}
                <Link href='/recipes' className="px-6 py-2 rounded-xl bg-emerald-500 text-white font-light hover:bg-emerald-600 transition-colors">
                Browse Recipes
                </Link>
            </div>
        </div>
    );
};

export default page;

import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo / Brand */}
                    <Link href="/" className="text-xl font-bold text-emerald-600">
                        RecipeApp
                    </Link>
            
                    {/* Links */}
                    <div className="flex space-x-6">
                        <Link
                            href="/recipes"
                            className="text-gray-700 hover:text-emerald-600 transition"
                        >
                            All Recipes
                        </Link>
            
                        <Link
                            href="/my-recipes"
                            className="text-gray-700 hover:text-emerald-600 transition"
                        >
                            My Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
      );
};

export default Navbar;




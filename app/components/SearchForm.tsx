import React from "react";
import Form from "next/form";
import {Search} from "lucide-react";

const SearchForm = ({ query } : {query?: string}) => {
    return (
        <>
            <Form action='/recipes' scroll={false} className="flex items-center gap-2 w-full max-w-lg mx-auto my-4 bg-white rounded-full p-2 border-1 border-emerald-700">
                <input
                    name="q"
                    type="text"
                    defaultValue={query}
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none rounded-full px-3 py-2"
                    placeholder="Search Recipes"
                />

                <div className="flex gap-2">
                    {/* If query has a value, show a reset button */}
                    {/* {query && <SearchFormReset/>} */}
                    <button type="submit" className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 transition text-white shadow cursor">
                        <Search className="size-5"/>
                    </button>
                </div>
            </Form>
        </>
    );
};

export default SearchForm;

"use client";

import { X } from "lucide-react";
import Link from "next/link";

const SearchBarResetButton = () => {
    const resetSearchBar = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;

        if (form) form.reset();
    };
    return (
        <button className="reset" onClick={resetSearchBar}>
            <Link href="/" className="search-btn text-white">
                <X className="size-5"/>
            </Link>
        </button>
    ); 
};

export default SearchBarResetButton;

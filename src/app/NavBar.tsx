'use client';
import Image from "next/image";
import { useState } from "react";

export function NavBar(){
	const [dark, setDark] = useState(false);
	return <>
		<div className="relative flex items-center justify-start h-16 col-span-1 md:col-span-2">
        	<a href="#introduction" className="text-black dark:text-white">{"Portfolio"}</a>
        	<div className="form-check form-switch ml-4">
                <input className="element-toggle" type="checkbox" role="switch" checked={dark} onClick={() => { setDark(!dark)}} />
            </div>
            	<Image src="./asset/moon-svgrepo-com.svg" alt="Night mode"
                className="h-8 w-8 filter dark:invert ml-4" />
        </div>
        <ul className="relative hidden sm:flex items-center justify-end h-16 text-black dark:text-white">
            <li className="mr-3">{"Made With:"}</li>
            <li>
				<a href="https://www.rust-lang.org/">
					<Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
					className="h-10 w-10 mr-3 filter dark:invert" alt="Rust" />
				</a>
			</li>
			<li>
				<a href="https://yew.rs/" >
					<Image src="https://yew.rs/img/logo.png"
					className="h-10 w-10 mr-3" alt="Yew" />
				</a>
			</li>
			<li>
				<a href="https://tailwindcss.com/">
					<Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
					className="h-10 w-10" alt="Tailwind CSS" />
				</a>
			</li>
		</ul>
	</>;
}
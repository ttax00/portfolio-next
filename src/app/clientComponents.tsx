"use client";
import { useState } from "react";


export function DarkModeToggle() {
	const [dark, setDark] = useState(false);
	return <div className="ml-4">
		<input type="checkbox" role="switch" checked={dark} 
		onChange={() =>{
			document.documentElement.className = !dark? "dark" : "";
			setDark(!dark);
		}} />
	</div>;
}
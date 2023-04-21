"use client";
import { useState } from "react";


export function DarkModeToggle() {
	const [dark, setDark] = useState(false);
	return <div className="form-check form-switch ml-4">
		<input className="element-toggle" type="checkbox" role="switch" checked={dark} 
		onChange={() =>{
			document.documentElement.className = !dark? "dark" : "";
			setDark(!dark);
		}} />
	</div>;
}
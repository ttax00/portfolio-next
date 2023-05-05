"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export function DarkModeToggle() {
	const [dark, setDark] = useState(false);
	return <div className="ml-4">
		<Switch id="dark-mode-switch" checked={dark} onCheckedChange={(checked) => {
			document.documentElement.className = checked ? "dark" : "";
			setDark(checked);
		}} />
		{/* <input type="checkbox" role="switch" checked={dark} 
		onChange={() =>{
			document.documentElement.className = !dark? "dark" : "";
			setDark(!dark);
		}} /> */}
	</div>;
}
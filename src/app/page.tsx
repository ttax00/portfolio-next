import {NavBar} from "./NavBar";

export default function Home() {
  return <>
	<header className="fixed z-10 w-screen bg-gray-500 dark:bg-gray-800">
		<NavBar/>
	</header>
	<main className="bg-slate-100 flex flex-col bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-600 dark:to-red-900"></main>
	<footer className="text-center text-black dark:text-white bg-gray-500 dark:bg-gray-800 pb-8 pt-6">{"Designed & Built by TechTheAwesome"}</footer>
  </>
}

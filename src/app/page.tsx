import { DarkModeToggle } from "./clientComponents";
import Image from "next/image";

export default function Home() {
	return <>
		<header className="fixed z-10 w-screen bg-gray-500 dark:bg-gray-800">
			<NavBar />
		</header>
		<main className="bg-slate-100 flex flex-col bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-600 dark:to-red-900">
			<Introduction />
			<Technologies />
		</main>
		<footer className="text-center text-black dark:text-white bg-gray-500 dark:bg-gray-800 pb-8 pt-6">{"Designed & Built by TechTheAwesome"}</footer>
	</>;
}

function NavBar() {
	return <>
		<nav className="mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-2">
			<div className="relative flex items-center justify-start h-16 col-span-1 md:col-span-2">
				<a href="#introduction" className="text-black dark:text-white">{"Portfolio"}</a>
				<DarkModeToggle />
				<div className="h-8 w-8 relative filter dark:invert ml-4">
					<Image fill src="/moon-svgrepo-com.svg" alt="Night mode" />
				</div>
			</div>
			<ul className="relative hidden sm:flex items-center justify-end h-16 text-black dark:text-white">
				<li className="mr-3">{"Made With:"}</li>
				<li>
					<a href="https://www.rust-lang.org/"  >
						<div className="h-10 w-10 mr-3 filter dark:invert relative">
							<Image fill src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
								alt="Rust" />
						</div>
					</a>
				</li>
				<li>
					<a href="https://yew.rs/"  >
						<div className="h-10 w-10 mr-3 filter relative">
							<Image fill src="https://yew.rs/img/logo.png"
								alt="Yew" />
						</div>

					</a>
				</li>
				<li>
					<a href="https://tailwindcss.com/" >
						<div className="h-10 w-10 mr-3 filter relative">
							<Image fill src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
								alt="Tailwind CSS" />
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</>;
}

function Introduction() {
	return <section id="introduction" className="section-commons px-8 sm:px-12 lg:px-32 grid grid-cols-2 md:grid-cols-3 content-center">
		<div className="flex flex-col justify-center content-start col-span-2">
			<p className="text-left mt-16 text-xl">
				<span className="motion-safe:animation fade-in text-3xl sm:text-5xl  md:text-7xl text-blue-600 dark:text-red-700">
					{"Hello world! I'm Tech."}
				</span>
				<br />
				<span className="motion-safe:animation delay-1s fade-in md:text-4xl">
					{"A multi-lingual, multi-disciplinary,"}
					<br />
					{"and self-taught hobbyist developer."}
				</span>
			</p>
			<p className="motion-safe:animation delay-2s fade-in text-left mt-4 text-sm md:text-xl">
				{"I work on curious projects, with emphasis on discovery and understanding."}
				<br />
				{"Currently making an effort to learn "} <a href="https://www.rust-lang.org/" className="text-blue-600 font-bold dark:text-red-700">{"Rust"}</a>{"."}
			</p>
			<div className="motion-safe:animation delay-3s fade-in self-start mt-8">
				<a className="btn-primary block motion-safe:animation delay-4s animate-bounce" href="https://github.com/TechTheAwesome">
					{"Checkout my projects on github!"}
				</a>
			</div>
			<div className="self-center motion-safe:animation delay-3s fade-in mt-8">
				<a href="#technologies">
					<div className="h-24 w-24 relative" >
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
							alt="scroll down" />
					</div>
				</a>
			</div>
		</div>
	</section>;
}

function Technologies() {
	return <section id="technologies" className="section-commons px-8 sm:px-12 lg:px-32 flex flex-col justify-center content-center text-center">
		<span className="text-2xl sm:text-4xl text-blue-600 dark:text-red-700">{"Technologies I love"}</span>
		<ul className="flex flex-row flex-wrap justify-center content-center animation fade-in delay-2s" >
			<li className="m-2">
				<a href="https://www.python.org/">
					<div className="h-24 w-24 relative">
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Python_logo_51.svg"
							alt="Python" />
					</div>
				</a>
			</li>
			<li className="m-2">
				<a href="https://ipfs.io/">
					<div className="h-24 w-24 relative">
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"
							alt="IPFS" />
					</div>
				</a>
			</li>
			<li className="m-2 inline-block overflow-hidden">
				<a href="https://dotnet.microsoft.com/en-us/languages/csharp">
					<div className="h-24 w-24 scale-150 relative">
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="Csharp" />
					</div>
				</a>
			</li>
			<li className="m-2">
				<a href="https://reactjs.org/" >
					<div className="object-fit h-24 w-24 filter brightness-75 dark:brightness-100 relative">
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
							alt="React" />
					</div>
				</a>
			</li>
			<li className="m-2">
				<a href="https://www.typescriptlang.org/">
					<div className="h-24 w-24 relative">
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
							alt="Typescript" />
					</div>
				</a>
			</li>
			<li className="m-2">
				<a href="https://www.rust-lang.org/">
					<div className="h-24 w-24 filter dark:invert relative">
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"
							alt="Rust" />
					</div>
				</a>
			</li>
			<li className="m-2">
				<a href="https://tailwindcss.com/">
					<div className="h-24 w-24 relative" >
						<Image fill src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
							alt="Tailwind CSS" />
					</div>
				</a>
			</li>

		</ul>
		<span className="text-sm">{"Icons from "}<a href="https://www.wikipedia.org/">{"wikipedia"}</a></span>
	</section>;
}
import { DarkModeToggle } from "./clientComponents";
import Image from "next/image";
import { GitHubSVG, LinkedInSVG, ObsidianSVG, TypeScriptSVG } from "./svgIcons";

export default function Home() {
	return <>
		<header className="fixed z-10 w-screen ">
			<NavBar />
		</header>
		<main className=" flex flex-col bg-slate-200 dark:bg-slate-700 dark:bg-opacity-80">
			<Section id="introduction">
				<Introduction />
			</Section>
			<Section id="code-yew">
				<CodeYew />
			</Section>
			<Section id="obsidian-s3">
				<ObsidianS3 />
			</Section>
		</main >
		<Footer />
	</>;
}

function Section({ id, children }: { id: string, children: JSX.Element; }) {
	return <section id={`${id}`} className="h-screen py-20  px-8 sm:px-12 lg:px-32">
		{children}
	</section>;
}

function NavBar() {
	return <>
		<nav className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 gap-2 bg-slate-400 dark:bg-slate-800">
			<div className="relative flex items-center justify-start h-16">
				<a href="#introduction"
					className="text-black dark:text-white font-bold no-underline w-10 h-10 relative"
				>
					<Image fill sizes="100% 100%" src="/icon.png" alt="icon"></Image>
				</a>
				<DarkModeToggle />
				<div className="h-8 w-8 relative filter dark:invert ml-4">
					<Image fill sizes="100% 100%" src="/moon-svgrepo-com.svg" alt="Night mode" />
				</div>
			</div>
			<div>
				<ul className="flex flex-row justify-center place-items-center h-full w-full space-x-8 title-color text-xl underline ">
					<a href="#introduction" className="text-center hover:scale-110 transition">Introduction</a>
					<a href="#code-yew" className="text-center hover:scale-110 transition" >Projects</a>
					<a href="" className="text-center hover:scale-110 transition">Contact</a>
				</ul>
			</div>
			<div className="relative hidden sm:flex items-center justify-end">
				<div className="mr-3">Powered by:</div>
				<ul className=" flex flex-row items-center">
					<li className="mr-3 w-16 hover:scale-110 transition">
						<a className="filter relative dark:invert"
							href="https://nextjs.org/" >
							<svg aria-label="Next.js logotype" role="img" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="var(--geist-foreground)"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="var(--geist-foreground)"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="var(--geist-foreground)"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="var(--geist-foreground)"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="var(--geist-foreground)" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="var(--geist-foreground)"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="var(--geist-foreground)"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="var(--geist-foreground)"></path></svg>
						</a>
					</li>
					<li className="mr-3 w-5 h-5 hover:scale-125	 transition">
						<a className="filter dark:invert relative text-black"
							href="https://vercel.com">
							<svg data-testid="geist-icon" fill="none" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L2 19.7778H22L12 2Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" /></svg>
						</a>
					</li>
				</ul>
			</div>
		</nav >
	</>;
}

function DownArrow({ id }: { id: string; }) {
	return <div className="self-center motion-safe:animation delay-3s hover:animate-bounce mt-8">
		<a href={`#${id}`}>
			<div className="h-14 w-14 md:h-24 md:w-24 relative" >
				<Image fill sizes="100% 100%" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
					alt="scroll down" />
			</div>
		</a>
	</div>;
}

function Introduction() {
	return <div className="flex flex-col justify-center h-full w-full">
		<div className="grid grid-cols-2 md:grid-cols-3 content-center ">
			<div className="flex flex-col justify-center col-span-2">
				<p className="text-3xl sm:text-5xl md:text-7xl title-color mt-10">Greetings!</p>
				<p className="md:text-4xl mt-4">I am Bach Nguyen, a curious and passionate OSS contributor.</p>
				<p className="text-left mt-4 text-sm md:text-xl">
					Motivated.
					<br />
					Currently, I am pursuing mastery in <a href="https://www.rust-lang.org/" className="title-color font-bold">{"Rust"}</a>, a strict and memory-safe language that aligns perfectly with my interests.
				</p>
			</div>
		</div>

		<DownArrow id="code-yew" />

	</div>;
}

function CodeYew() {
	return <div className="flex flex-col justify-center h-full">
		<div className="w-full">
			<p className="md:text-5xl text-3xl mt-4 text-center title-color">Projects</p>
		</div>
		<div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full">
			<div className="relative w-full h-full transition md:m-0 mt-4">
				<Image fill sizes="100% 100%" className="object-contain" src="/code-yew.gif" alt="code yew example" />
			</div>
			<div className="flex flex-col justify-center items-start lg:pl-10">
				<p className="md:text-4xl text-2xl mt-4">Rust-Yew</p>
				<p className="mt-4">A Feature-Rich VSCode Extension for Syntax Highlighting and Enhanced Language Support for Yew HTML Macro in Rust.</p>
				<ul className="flex flex-row flex-wrap space-x-4 mt-4 justify-center items-start md:items-center">
					<li className="relative">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="https://img.shields.io/visual-studio-marketplace/i/TechTheAwesome.rust-yew?style=for-the-badge" alt="Install count" />
					</li>
					<li className="h-8 w-8 hover:scale-125 transition">
						<a href="">
							<TypeScriptSVG />
						</a>
					</li>
					<li className="h-8 w-8 hover:scale-125 transition dark:invert">
						<a href="https://github.com/TechTheAwesome/code-yew-server">
							<GitHubSVG />
						</a>

					</li>
					<li className="relative h-8 w-8 hover:scale-125 transition">
						<a href="https://marketplace.visualstudio.com/items?itemName=TechTheAwesome.rust-yew">
							<Image fill sizes="100% 100%" src="/vscode.png" alt="vscode marketplace"></Image>
						</a>
					</li>
				</ul>
			</div>

		</div>
		<DownArrow id="obsidian-s3" />
	</div>;
}

function ObsidianS3() {
	return <div className="flex flex-col justify-center h-full">
		<div className="flex flex-col lg:flex-row justify-center items-center h-full md:pt-10 pt-4">
			<div className="flex flex-col justify-center items-start lg:pr-10 lg-pb-0 pb-10 ">
				<p className="md:text-4xl text-2xl mt-4">S3 attachments storage</p>
				<p className="mt-4">An Obsidian Plugin for Streamlined Storage and Retrieval of Media Attachments on S3-Compatible Services.</p>
				<ul className="flex flex-row flex-wrap mt-4 justify-center items-start md:items-center">
					<li className="h-8 w-8 mr-4 hover:scale-125 transition">
						<a href="">
							<TypeScriptSVG />
						</a>
					</li>
					<li className="h-8 w-8 mr-4 hover:scale-125 transition dark:invert">
						<a href="https://github.com/TechTheAwesome/obsidian-s3">
							<GitHubSVG />
						</a>
					</li>
					<li className="h-8 w-8 hover:scale-125 transition">
						<a href="https://obsidian.md">
							<ObsidianSVG />
						</a>
					</li>
				</ul>
			</div>
			<div className="relative w-full h-full mt-4 md:mt-0 transition">
				<Image fill sizes="100% 100%" className="object-contain" src="/obsidian-s3.gif" alt="code yew example" />
			</div>
		</div>
		<DownArrow id="technologies" />
	</div>;
}

function Footer() {
	return <footer className="flex flex-col items-center justify-center bg-gray-500 dark:bg-gray-800 pb-2 pt-4">
		<ul className="flex flex-row space-x-4 items-center justify-center">
			<li className="h-10 w-10 hover:scale-125 transition dark:invert">
				<a href="https://github.com/TechTheAwesome">
					<GitHubSVG />
				</a>

			</li>
			<li className="h-10 w-10 hover:scale-125 transition dark:invert">
				<a href="https://www.linkedin.com/in/nguyen-chi-bach/">
					<LinkedInSVG />
				</a>
			</li>
		</ul>
		<div className="mt-2">Bach Nguyen © 2023</div>
	</footer>;
}


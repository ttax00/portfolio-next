import { DarkModeToggle } from "./clientComponents";
import Image from "next/image";

export default function Home() {
	return <>
		<header className="fixed z-10 w-screen ">
			<NavBar />
		</header>
		<main className="bg-slate-100 flex flex-col bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-rose-900">
			<Section id="introduction">
				<Introduction />
			</Section>
			<Section id="code-yew">
				<CodeYew />
			</Section>
			<Section id="obsidian-s3">
				<ObsidianS3 />
			</Section>
		</main>
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
		<nav className="mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-2 bg-slate-500 dark:bg-slate-800">
			<div className="relative flex items-center justify-start h-16 col-span-1 md:col-span-2">
				<a href="#introduction" className="text-blue-900 dark:text-red-800 font-bold no-underline">Portfolio</a>
				<DarkModeToggle />
				<div className="h-8 w-8 relative filter dark:invert ml-4">
					<Image fill src="/moon-svgrepo-com.svg" alt="Night mode" />
				</div>
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
			<div className="h-24 w-24 relative" >
				<Image fill src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
					alt="scroll down" />
			</div>
		</a>
	</div>;
}

function Introduction() {
	return <div className="flex flex-col justify-center h-full w-full">
		<div className="grid grid-cols-3 content-center ">
			<div className="flex flex-col justify-center col-span-2">
				<p className="text-3xl sm:text-5xl md:text-7xl text-blue-600 dark:text-rose-950 mt-10">Greetings!</p>
				<p className="md:text-4xl mt-4">I am Tech, a versatile and adaptable self-taught developer, skilled in multiple programming languages.</p>
				<p className="text-left mt-4 text-sm md:text-xl">
					My focus is on projects that prioritize solving problems using efficient, reliable, and maintainable practices.
					Currently, I am actively engaged in mastering <a href="https://www.rust-lang.org/" className="text-blue-600 font-bold dark:text-rose-950">{"Rust"}</a>{"."}, a cutting-edge and bleed-responsibly language that aligns perfectly with my interests.
				</p>
				{/* <div className="motion-safe:animation delay-3s fade-in self-start mt-8">
					<a className="btn-primary block" href="https://github.com/TechTheAwesome">
						Explore my projects on github!
					</a>
				</div> */}
			</div>
		</div>

		<DownArrow id="code-yew" />

	</div>;
}

function CodeYew() {
	return <div className="flex flex-col justify-center h-full">
		<div className="flex flex-col-reverse md:flex-row justify-center items-center h-full">
			<div className="relative w-full h-full transition hover:scale-110 md:m-0 mt-4">
				<Image fill className="object-contain" src="/code-yew.gif" alt="code yew example" />
			</div>
			<div className="flex flex-col justify-center items-start md:pl-10">
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
							<Image fill src="/vscode.png" alt="vscode marketplace"></Image>
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
		<div className="flex flex-col md:flex-row justify-center items-center h-full">
			<div className="flex flex-col justify-center items-start md:pr-10">
				<p className="md:text-4xl text-2xl mt-4">S3 attachments storage</p>
				<p className="mt-4">An Obsidian Plugin for Streamlined Storage and Retrieval of Media Attachments on S3-Compatible Services.</p>
				<ul className="flex flex-row flex-wrap mt-4 justify-center items-start md:items-center">
					<li className="h-8 w-8 mr-4 hover:scale-125 transition">
						<a href="">
							<TypeScriptSVG />
						</a>
					</li>
					<li className="h-8 w-8 mr-4 mt-4 md:mt-0 hover:scale-125 transition dark:invert">
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
			<div className="relative w-full h-full mt-4 sm:mt-0 mr-10 transition hover:scale-110">
				<Image fill className="object-contain" src="/code-yew.gif" alt="code yew example" />
			</div>
		</div>
		<DownArrow id="technologies" />
	</div>;
}

function Footer() {
	return <footer className="flex flex-row items-center justify-center bg-gray-500 dark:bg-gray-800 pb-8 pt-6">
		<ul>
			<li className="h-10 w-10 hover:scale-125 transition dark:invert">
				<a href="https://github.com/TechTheAwesome">
					<GitHubSVG />
				</a>
			</li>
		</ul>
	</footer>;
}

function GitHubSVG() {
	return <svg viewBox="0 0 20 20" version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>;
}

function TypeScriptSVG() {
	return <svg fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"></rect><rect fill="#3178c6" height="512" rx="50" width="512"></rect><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"></path></svg>;
}

function ObsidianSVG() {
	return <svg viewBox="0 0 100 100" width="30" height="30">
		<defs>
			<linearGradient id="a" x1="82.85" y1="30.41" x2="51.26" y2="105.9" gradientTransform="matrix(1, 0, 0, -1, -22.41, 110.97)" gradientUnits="userSpaceOnUse">
				<stop offset="0" stop-color="#6c56cc"></stop>
				<stop offset="1" stop-color="#9785e5"></stop>
			</linearGradient>
		</defs>
		<polygon points="44.61 0 12.91 17.52 0 45.45 19.57 90.47 47.35 100 52.44 89.8 63 26.39 44.61 0" fill="#34208c"></polygon>
		<polygon points="63 26.39 43.44 14.41 16.43 35.7 47.35 100 52.44 89.8 63 26.39" fill="url(#a)"></polygon>
		<polygon points="63 26.39 63 26.39 44.61 0 43.44 14.41 63 26.39" fill="#af9ff4"></polygon>
		<polygon points="43.44 14.41 44.61 0 12.91 17.52 16.43 35.7 43.44 14.41" fill="#4a37a0"></polygon>
		<polygon points="16.43 35.7 19.57 90.47 47.35 100 16.43 35.7" fill="#4a37a0"></polygon>
	</svg>;
}
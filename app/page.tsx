export default function Page() {
	return (
		<div className="mx-auto max-w-[700px] px-8 pt-16 leading-relaxed antialiased md:pt-44">
			<main className="mb-12">
				<h1 className="text-2xl text-white font-semibold text-neutral-50">
					The Cold North
				</h1>
				<h2 className="text-coral font-bold">Thomas Carlson</h2>
				<p className="mt-6 text-xanadu">
					Full-stack developer based out of Copenhagen, Denmark. Helping companies
					architect and build <span className="text-white">apps</span> and{" "}
					<span className="text-white">websites</span>. Happy working with{" "}
					<span className="text-white">TypeScript</span>,{" "}
					<span className="text-white">React Native</span>,{" "}
					<span className="text-white">Next.js</span> &amp;{" "}
					<span className="text-white">GraphQL</span>. Huge fan of{" "}
					<span className="text-white">case study houses</span>.
				</p>

				<p className="mt-6 text-xanadu">
					Check out{" "}
					<a
						href="https://github.com/thomas0c"
						className="border-b border-xanadu pb-px transition-colors hover:border-white hover:text-white hover:duration-300"
					>
						GitHub
					</a>
					, drop by{" "}
					<a
						href="https://www.linkedin.com/in/thomasoc/"
						className="border-b border-xanadu pb-px transition-colors hover:border-white hover:text-white hover:duration-300"
					>
						LinkedIn
					</a>
					.
				</p>

				<div className="mt-14 grid grid-cols-12 gap-y-4 md:gap-x-8">
					<div className="col-span-full md:col-span-4 sticky">
						<h2 className="font-semibold text-white">Experience &amp; projects</h2>
					</div>
					<div className="col-span-full md:col-span-8 md:col-start-5 space-y-4 text-xanadu">
						<div className="group">
							<h2 className="font-semibold transition-colors group-hover:text-coral hover:duration-300">
								Tech Lead at NoA Ignite Denmark
							</h2>
							<p className="text-xs transition-colors group-hover:text-eggshell hover:duration-100">
								2019-current
							</p>
							<p className="text-xs mt-2 transition-colors group-hover:text-white hover:duration-300 leading-5">
								Tech lead and full-stack developer building apps, e-commerce
								websites and single page applications with tools such as Next.js,
								Vercel, Sanity, React Native and Node.js. Responsible for
								architecting, planning and building digital experiences.
							</p>
							<p className="text-xs transition-colors group-hover:text-white hover:duration-300 mt-2 leading-5">
								Won gold at Danish Digital Awards within{" "}
								<span className="text-white">innovation</span> and{" "}
								<span className="text-white">data science</span> for WARD 24/7.{" "}
							</p>
						</div>
						<div className="group pt-4">
							<h2 className="font-semibold transition-colors group-hover:text-coral hover:duration-300 leading-5">
								Developer at ustwo Malmö
							</h2>
							<p className="text-xs transition-colors group-hover:text-eggshell hover:duration-100">
								2018-2019
							</p>
							<p className="text-xs mt-2 transition-colors group-hover:text-white hover:duration-300 leading-5">
								App & web developer working with clients such as Save the Children
								Sweden enabling best-in-class experiences with technologies like
								React Native, Next.js and Node.js.
							</p>
							<p className="text-xs mt-2 transition-colors group-hover:text-white hover:duration-300 leading-5">
								Safe Place app was awarded in the{" "}
								<span className="text-white">
									Fast Company Innovation by Design
								</span>{" "}
								Awards in 2019 in the Health and Social Good category.
							</p>
						</div>
						<div className="group pt-4">
							<h2 className="font-semibold transition-colors group-hover:text-coral hover:duration-300">
								Engineering Lead at Siberia New York
							</h2>
							<p className="text-xs transition-colors group-hover:text-eggshell hover:duration-300 transition-colors group-hover:text-white hover:duration-100">
								2014-2017
							</p>
							<p className="text-xs mt-2 transition-colors group-hover:text-white hover:duration-300 leading-5">
								Started as an intern. Ended up as an engineering lead. Built
								chatbots, websites, prototypes, native apps. Also did technical
								strategic research and innovation outlooks. Fortunate enough to work
								with brands such as Avis, Google, Nike and Intel.
							</p>
						</div>
						<div className="group pt-4">
							<h2 className="font-semibold transition-colors group-hover:text-coral hover:duration-300">
								Creative Technologist at Another Copenhagen
							</h2>
							<p className="text-xs transition-colors group-hover:text-eggshell hover:duration-300 transition-colors group-hover:text-white hover:duration-100">
								2013-2014
							</p>
							<p className="text-xs mt-2 transition-colors group-hover:text-white hover:duration-300 leading-5">
								Worked as creative technologist helping establish brand new agency
								Another when established in August 2013. Responsible for all digital
								products and projects including campaigns for SELECTED, Birger1962,
								Wood Wood and BØRNEfonden.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

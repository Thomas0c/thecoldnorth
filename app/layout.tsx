import "../styles/globals.css";
import { Inter_Tight } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const interTight = Inter_Tight();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={interTight.className}>
			<head>
				<title>The Cold North</title>
        <link href="/favicon.png"  type="image/png" rel="icon" media="(prefers-color-scheme: light)" />
				<link href="/favicon-dark.png"  type="image/png" rel="icon" media="(prefers-color-scheme: dark)" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
					media="(prefers-color-scheme: light)"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon-dark.png"
					media="(prefers-color-scheme: dark)"
				/>

				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F3EFE0" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#30343F" />
			</head>
			<body>{children}</body>
		</html>
	);
}

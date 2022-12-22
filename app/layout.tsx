import "../styles/globals.css";
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], preload: true });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<title>The Cold North</title>
				<link
					href="/favicon.png"
					type="image/png"
					rel="icon"
					media="(prefers-color-scheme: light)"
				/>
				<link
					href="/favicon-dark.png"
					type="image/png"
					rel="icon"
					media="(prefers-color-scheme: dark)"
				/>
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

				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F3EFE0" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#30343F" />
			</head>
			<body className="bg-gray-dark">{children}</body>
		</html>
	);
}

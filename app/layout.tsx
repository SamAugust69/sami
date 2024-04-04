import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { Nav } from './components/Nav';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} bg-t-300 min-h-screen flex flex-col items-center`}>
				<Nav />
				{children}
			</body>
		</html>
	);
}

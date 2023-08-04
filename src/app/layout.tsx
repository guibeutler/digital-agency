import { Inter } from 'next/font/google'
import { ThemeProvider } from '@context/themeContext'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Digital Agency',
	description: '',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<div className="container">
						<Navbar />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

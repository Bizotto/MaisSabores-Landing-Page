import FloatingButton from '@/components/floatingButton'
import Footer from '@/components/footer'
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Indie_Flower } from 'next/font/google'
import './globals.css'

const indieFlower = Indie_Flower({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Amore Empadas',
	description: 'Levando amor e satisfação a cada mordida',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`bg-primary ${indieFlower.className}`}>
				<FloatingButton />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

'use client'
import { HomeIcon, InstagramIcon, MessageSquareShareIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FloatingButton() {
	const pathname = usePathname()

	return (
		<div className="lg:hidden xl:hidden md:hidden 2xl:hidden fixed flex shadow-md shadow-black/30 justify-between gap-4 bg-secondary-200 z-50 bottom-3 right-4 rounded-full border-2 p-2 border-secondary-300">
			<Link
				href="https://www.instagram.com/empadamores_?igshid=OGQ5ZDc2ODk2ZA=="
				target="_blank"
			>
				<div className="border-2 border-secondary-300 p-2 rounded-full">
					<InstagramIcon className="h-6 w-6 text-secondary-300" />
				</div>
			</Link>
			{pathname !== '/' && (
				<Link href="/">
					<div className="border-2 border-secondary-300 p-2 rounded-full">
						<HomeIcon className="h-6 w-6 text-secondary-300" />
					</div>
				</Link>
			)}
			<Link href="" target="_blank">
				<div className="border-2 border-secondary-300 p-2 rounded-full">
					<MessageSquareShareIcon className="h-6 w-6 text-secondary-300" />
				</div>
			</Link>
		</div>
	)
}

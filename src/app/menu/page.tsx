import Image from 'next/image'
import Link from 'next/link'
import { empadas, empadinhas } from '../../components/constants'

export default function Menu() {
	return (
		<div className="max-sm:flex flex-col gap-20 max-sm:mx-5 max-md:mx-5 max-lg:mx-5 max-xl:mx-5">
			<section className="mx-auto flex max-w-7xl h-[100vh] max-[375px]:mt-48 max-sm:mt-48 items-center justify-center space-y-5">
				<div className="flex gap-5 flex-col">
					<h1 className="text-7xl flex items-center justify-center max-md:mt-24">
						Cardápio
					</h1>
					<h2 className="text-4xl flex items-center justify-center">Empadas</h2>

					<div className="grid grid-cols-2 gap-4 max-sm:flex flex-col">
						{empadas.map((item) => {
							return (
								<Link
									key={item.label}
									target="_blank"
									href={`https://wa.me/4896096712/?text=Olá, gostaria de pedir um ${item.label}!`}
								>
									<div className="flex gap-2 items-center max-sm:justify-start shadow-md shadow-black/30 border-2 border-secondary-100 rounded-md p-2 hover:scale-105 hover:bg-secondary-100/50 transitions-all duration-300">
										<Image
											className="rounded-md max-sm:w-28 max-sm:h-28 max-lg:w-28 max-lg:h-28"
											src="https://picsum.photos/200"
											alt={item.label}
											width={150}
											height={150}
										/>
										<div className="flex flex-col gap-2">
											<p className="text-2xl max-sm:text-xl">{item.label}</p>
											<p className="text-2xl max-sm:text-xl">{item.price}</p>
											<p>Mande uma mensagem</p>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</section>

			<section className="mx-auto flex max-w-7xl max-[375px]:mt-48 max-sm:mt-48 items-center justify-center space-y-5">
				<div className="flex flex-col gap-5 ">
					<h2 className="text-4xl flex items-center justify-center">
						Empadinhas
					</h2>
					<div className="grid grid-cols-2 gap-4 max-sm:flex flex-col">
						{empadinhas.map((item) => {
							return (
								<Link
									key={item.label}
									target="_blank"
									href={`https://wa.me/4896096712/?text=Olá, gostaria de pedir um ${item.label}!`}
								>
									<div
										className="flex gap-2 items-center max-sm:justify-start shadow-md shadow-black/30 border-2 border-secondary-100 rounded-md p-2 hover:scale-105 hover:bg-secondary-100/50 transitions-all duration-300"
										key={item.label}
									>
										<Image
											className="rounded-md max-sm:w-28 max-sm:h-28 max-lg:w-28 max-lg:h-28"
											src="https://picsum.photos/200"
											alt={item.label}
											width={150}
											height={150}
										/>
										<div className="flex flex-col gap-2">
											<p className="text-2xl max-sm:text-xl">{item.label}</p>
											<p className="text-2xl max-sm:text-xl">{item.price}</p>
											<p>Mande uma mensagem</p>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}

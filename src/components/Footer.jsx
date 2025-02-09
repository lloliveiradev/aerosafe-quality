import Image from 'next/image';
import logo from '../../public/full_logo.png';
import { XLogo, YoutubeLog, InstagramLogo, FacebookLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
    return (
        <section className="bg-gray-100 text-gray-800 pb-10">
            <div className="container mx-auto px-4 pt-5">
                <div className="flex items-center justify-center">
                    <a href="#" className="mb-5">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={200}
                            height={50}
                        />
                    </a>
                </div>
                <div className='mb-5 text-center'>
                    <h5 className="font-bold mb-2 text-center">Redes Sociais</h5>
                    <div className="flex justify-center pt-2 gap-4 text-3xl">
                        <a className="" href="#"><XLogo /></a>
                        <a className="text-sky-800" href="#"><FacebookLogo /></a>
                        <a className="text-sky-600" href="#"><LinkedinLogo /></a>
                        <a className="text-pink-700" href="#"><InstagramLogo /></a>
                        <a className="text-red-700" href="#"><YoutubeLogo /></a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className=" text-center">
                        <h5 className="font-bold mb-2">Localização</h5>
                        <p className="mb-2">Av. das Nações Unidas, 12.901</p>
                        <p className="mb-2">Brooklin Novo, São Paulo - SP</p>
                        <p className="mb-2">CEP: 04578-910</p>
                        <p className="mb-0">(11) 3099-9999</p>
                    </div>
                    <div className=" text-center">
                        <h5 className="font-bold mb-2">Horários e Contato</h5>
                        <p className="mb-2">Segunda à Sexta: 08:00 às 18:00</p>
                        <p className="mb-2">Sábados e Domingos: Fechado</p>
                        <p className="mb-0">Telefone: (11) 3099-9999</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <p className="m-0">
                        &copy; <a href="#" className='text-sky-600'>AeroSafe</a>. All Rights Reserved.
                        Designed by <a href="https://sixess.com.br" className='text-sky-600' target="_blank">Sixess</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}
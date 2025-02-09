import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import heroImg from '../../public/hero.png';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="bg-sky-900 text-white relative overflow-hidden" id='home'>
            <div>
                <Image
                    src={heroImg}
                    alt="Imagem de laboratório"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-50 lg:hidden"
                />
                <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
            </div>
            <div className='container mx-auto px-4 pt-16 pb-16 md:pb-0 lg:py-24 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down" data-aos-duration="300">
                            Qualificação com Excelência e Segurança
                        </h1>
                        <p className="lg:text-lg mt-4 text-justify">
                            Na <strong>AeroSafe Quality</strong>, garantimos conformidade e eficiência para indústrias farmacêuticas, cosméticas, alimentícias,
                            veterinárias, farmácias de manipulação e hospitais. Especialistas em qualificação de equipamentos, validação de
                            processos e segurança biológica, elevamos o padrão do seu negócio com expertise e inovação.
                        </p>
                        <a target='_blank'
                            href={'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da AeroSafe Quality.'}
                            className="w-fit gap-2 bg-sky-500 hover:bg-sky-700 text-white font-semibold flex items-center justify-center px-6 py-3 mt-6 rounded-md">
                            < WhatsappLogo className="w-5 h-5" />
                            Saiba mais
                        </a>
                    </div>
                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={heroImg}
                            alt="Imagem de laboratório"
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}
import Image from 'next/image';
import aboutImg from '../../public/images/about.jpg';
import aboutImg2 from '../../public/images/about-2.jpg';

export default function About() {
    return (
        <section className='py-16 bg-gray-100' id='about'>
            <div className='container px-4 mx-auto'>
                <div className='grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='relative' data-aos="fade-up-right" data-aos-duration="300">
                        <div className='relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden'>
                            <Image
                                src={aboutImg}
                                alt='Imagem sobre'
                                fill
                                priority
                                quality={100}
                                className='object-cover hover:scale-110 transform transition-all duration-300'
                            />
                        </div>
                        <div className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white'>
                            <Image
                                src={aboutImg2}
                                alt='Imagem sobre 2'
                                fill
                                priority
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className='space-y-6 mt-10' data-aos="fade-up-left" data-aos-duration="300">
                        <h2 className='text-4xl font-bold'>SOBRE</h2>
                        <p className='text-lg mt-4 text-justify'>
                            Bem-vindo à <strong>AeroSafe Quality</strong>, sua parceira em assessoria e consultoria especializada em qualificações e
                            validações. Com um compromisso inabalável com a excelência e a conformidade, atuamos como referência no
                            suporte a indústrias farmacêuticas, cosméticas, veterinárias, alimentícias, farmácias de manipulação e
                            hospitais.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
};
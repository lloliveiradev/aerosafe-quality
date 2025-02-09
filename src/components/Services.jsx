"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import airConditioning from '../../public/images/air-conditioning.jpg';
import cleanRoom from '../../public/images/clean-room.jpg';
import compressedAir from '../../public/images/compressed-air.jpg';
import lab3 from '../../public/images/analysis-3.jpg';
import lab2 from '../../public/images/analysis-2.jpg';
import project from '../../public/images/project.jpg';
import techAir from '../../public/images/tech-air.jpg';
import { AirVent, BookCheck, Fan, FireExtinguisher, FlaskConical, Pill, ShieldCheck, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
    {
        title: 'Sistemas de Tratamento de Ar',
        description: `Oferecemos serviços especializados em sistemas de tratamento e condicionamento de ar, incluindo manutenção preventiva e corretiva, PMOC (Plano de Manutenção, Operação e Controle), e gestão de sistemas centrais de ar condicionado. Nossas soluções garantem eficiência energética, conformidade com normas técnicas e a máxima qualidade do ar em ambientes industriais, comerciais e laboratoriais.`,
        icon: <Fan />,
        image: airConditioning,
        duration: '1 a 7 dias',
        price: 'A partir de R$ 1.500,00'
    },
    {
        title: 'Manutenção de Sistemas de Ar Condicionado',
        description: 'Realizamos a manutenção de condicionadores de ar tipo split ou convencionais, incluindo troca de filtros, limpeza de serpentinas, reposição de gás refrigerante, higienização de sistemas e inspeções periódicas. Nossos serviços asseguram o funcionamento adequado dos equipamentos, prolongando sua vida útil e garantindo a qualidade do ar interior.',
        icon: <AirVent />,
        image: techAir,
        duration: '1 a 2 dias',
        price: 'A partir de R$ 350,00'
    },
    {
        title: 'Farmácias e Laboratórios',
        description: 'Especializados em ambientes críticos, oferecemos qualificação de cabines de segurança biológica, capelas de exaustão de gases e sistemas de exaustão de pós. Nossos serviços incluem instalação, manutenção e qualificação de sistemas de condicionamento e renovação de ar, garantindo conformidade com as normas da Anvisa e demais regulamentações técnicas.',
        icon: <Pill />,
        image: lab3,
        duration: '1 a 3 dias',
        price: 'A partir de R$ 1.200,00'
    },
    {
        title: 'Sistemas de Troca de Ar em Laboratórios',
        description: 'Projetamos, instalamos e mantemos sistemas de troca de ar em laboratórios, assegurando a renovação adequada e a qualidade do ar em ambientes controlados. Nossos serviços incluem balanceamento de fluxo de ar, monitoramento contínuo e qualificação de sistemas, conforme exigido pelas normas técnicas e regulamentações vigentes.',
        icon: <FlaskConical />,
        image: lab2,
        duration: '1 a 3 dias',
        price: 'A partir de R$ 1.000,00'
    },
    {
        title: 'Salas Limpas e Ambientes Controlados',
        description: 'Realizamos a qualificação de salas limpas e ambientes controlados, incluindo certificação de áreas, qualificação de fluxo unidirecional e validação de cabines de biosegurança. Nossos serviços abrangem IQ (Qualificação de Instalação), OQ (Qualificação de Operação) e PQ (Qualificação de Performance), em conformidade com a RDC 17/2010 da Anvisa e a NBR ISO 14644.',
        icon: <BookCheck />,
        image: cleanRoom,
        duration: '1 a 2 semanas',
        price: 'A partir de R$ 2.500,00'
    },
    {
        title: 'Elaboração de Projetos e Balanceamento de Áreas Limpas',
        description: 'Desenvolvemos projetos personalizados para salas limpas e ambientes controlados, incluindo balanceamento de áreas limpas para garantir distribuição homogênea de fluxo de ar e pressão diferencial. Nossas soluções atendem às normas técnicas e regulamentações específicas de cada setor.',
        icon: <ShieldCheck />,
        image: project,
        duration: '1 a 2 semanas',
        price: 'A partir de R$ 3.000,00'
    },
    {
        title: 'Ar Comprimido e Outros Gases',
        description: 'Oferecemos qualificação e análise de ar comprimido, ar respirável, nitrogênio e outros gases utilizados em processos industriais e laboratoriais. Nossos serviços incluem IQ, OQ e PQ, garantindo a qualidade e a conformidade dos sistemas com as normas técnicas e regulamentações aplicáveis.',
        icon: <FireExtinguisher />,
        image: compressedAir,
        duration: '1 a 5 dias',
        price: 'A partir de R$ 1.800,00'
    },
];

export default function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            768: {
                slidesToScroll: 2
            }
        }
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    };

    function scrollNext() {
        emblaApi?.scrollNext();
    };

    return (
        <section className='py-16 bg-gray-100' id='services'>
            <div className='container mx-auto px-4'>
                <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>
                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] px-3'>
                                    <article className='bg-[#1e293b] p-6 rounded-lg text-white p-6 space-y-4 h-full flex flex-col'>
                                        <div className='h-48 overflow-hidden relative'>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                className='object-cover w-fit p-0 m-0 rounded-lg'
                                                fill
                                                sizes='100vw'
                                            />
                                        </div>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <span className='text-3xl pt-1 me-2'>{item.icon}</span>
                                            <div>
                                                <h3 className='text-xl font-bold my-1'>{item.title}</h3>
                                                <p className='text-gray-300 text-lg select-none text-justify pe-6'>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <span>{item.price}</span>
                                            </div>
                                            <a target='_blank'
                                                href={'https://wa.me/5511999999999?text=Olá! Gostaria de fazer um orçamento para o serviço de ' + item.title + ' da AeroSafe Quality.'}
                                                className='flex items-center justify-center gap-2 hover:bg-sky-500 px-4 py-1 rounded-lg duration-300'>
                                                <WhatsappLogo className='w-5 h-5' />
                                                Fazer orçamento
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 left-3 -translate-y-1/2 shadow-md z-10 -translate-x-1/2'
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>
                    <button
                        className='bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg absolute top-1/2 -right-6 -translate-y-1/2 shadow-md z-10 -translate-x-1/2'
                        onClick={scrollNext}
                    >
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>
                </div>
            </div>
        </section>
    )
};
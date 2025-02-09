import { Check } from 'lucide-react';
import Image from 'next/image';
import missao from '../../public/images/missao.jpg';

const valores = [
    { title: 'Excelência Técnica', description: 'Buscamos constantemente o aprimoramento e a atualização de nossos conhecimentos para oferecer soluções de alta qualidade.' },
    { title: 'Compromisso com o Cliente', description: 'Entendemos as necessidades específicas de cada cliente, oferecendo soluções personalizadas e resultados que superam expectativas.' },
    { title: 'Segurança e Qualidade', description: 'Priorizar a segurança biológica e a conformidade regulatória em todos os projetos é fundamental para garantir a confiança dos clientes e a integridade dos processos.' }
];

export default function Mission() {
    return (
        <section className="bg-sky-900 text-white py-16" id="mission">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">MISSÃO & VISÃO & VALORES</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 text-lg'>
                    <div className='hidden md:block'>
                        <Image
                            src={missao}
                            alt="Missão"
                            width={400}
                            height={200}
                            className='rounded-lg shadow-lg border-4 border-white/50'
                        />
                    </div>
                    <div>
                        <p className="mt-4 text-justify">
                            Nossa missão é fornecer consultoria especializada em qualificações e validações,
                            garantindo qualidade, conformidade e segurança biológica para indústrias farmacêuticas, cosméticas,
                            veterinárias, alimentícias, farmácias de manipulação e hospitais. Atuamos como parceiros estratégicos,
                            promovendo excelência operacional e confiança em seus processos e produtos.
                            <br /><br />
                            Visamos ser reconhecidos como referência nacional e internacional em consultoria e assessoria para qualificações e
                            validações, destacando-nos pela excelência técnica, inovação e compromisso com a satisfação dos clientes.
                            Almejamos expandir nossa atuação, consolidando a AeroSafe Quality como sinônimo de qualidade, segurança e
                            confiabilidade em todos os setores que atendemos.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-4 text-justify">
                            {valores.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <div className='flex align-items-center gap-2'>
                                        <Check className="text-green-500" />
                                        <strong>{item.title}:</strong>
                                    </div>
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
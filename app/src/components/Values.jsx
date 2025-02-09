import { Check } from 'lucide-react';

export default function Values() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold">VALORES</h2>
                <div className='flex gap-10 text-justify'>
                    <div className="space-y-6 mt-4">
                        <ul className="space-y-4">
                            <li className="mb-2">
                                <div className='flex align-items-center gap-2'>
                                    <Check className="text-green-500" />
                                    <strong>Excelência:</strong>
                                </div>
                                Buscamos constantemente o aprimoramento e a atualização de nossos
                                conhecimentos para oferecer soluções de alta qualidade.
                            </li>
                            <li className="mb-2">
                                <div className='flex align-items-center gap-2'>
                                    <Check className="text-green-500" />
                                    <strong>Compromisso:</strong>
                                </div>
                                Entendemos as necessidades específicas de cada cliente,
                                oferecendo soluções personalizadas e resultados que superam expectativas.
                            </li>
                            <li className="mb-2">
                                <div className='flex align-items-center gap-2'>
                                    <Check className="text-green-500" />
                                    <strong>Inovação:</strong>
                                </div>
                                Investimos em tecnologias e metodologias modernas para garantir processos
                                eficientes e alinhados com as melhores práticas do mercado.
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6 mt-4 hidden md:block">
                        <ul className="space-y-4">
                            <li className="mb-2">
                                <div className='flex align-items-center gap-2'>
                                    <Check className="text-green-500" />
                                    <strong>Segurança:</strong>
                                </div>
                                Priorizamos a segurança biológica e a conformidade regulatória em
                                todos os projetos que executamos.
                            </li>
                            <li className="mb-2">
                                <div className='flex align-items-center gap-2'>
                                    <Check className="text-green-500" />
                                    <strong>Equipe:</strong>
                                </div>
                                Valorizamos a colaboração e o respeito mútuo, promovendo um ambiente
                                de trabalho harmonioso e produtivo.
                            </li>
                            <li className="mb-2">
                                <div className='flex align-items-center gap-2'>
                                    <Check className="text-green-500" />
                                    <strong>Sustentabilidade:</strong>
                                </div>
                                Contribuímos para práticas sustentáveis, alinhando nossos serviços à
                                responsabilidade ambiental e social.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};
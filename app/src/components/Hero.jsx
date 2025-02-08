import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
export default function Hero() {
    return (
        <section className="bg-sky-700 text-white text-center py-20">
            <div>
                <article>
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Qualificação e Validação com Excelência e Segurança
                        </h1>
                        <p className="lg:text-lg mt-4">
                            Na <strong>AeroSafe Quality</strong>, garantimos conformidade e eficiência para indústrias farmacêuticas, cosméticas, alimentícias,
                            veterinárias, farmácias de manipulação e hospitais. Especialistas em qualificação de equipamentos, validação de
                            processos e segurança biológica, elevamos o padrão do seu negócio com expertise e inovação.
                        </p>
                    </div>
                    <a href="#" className="w-fit bg-sky-500 text-white font-semibold flex items-center justify-center px-6 py-3 mt-6 rounded-md">
                        Saiba mais
                    </a>
                </article>
            </div>
        </section>
    );
}
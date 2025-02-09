import balometer from '../../public/images/balometer.jpg';
import bomb from '../../public/images/bomb.jpg';
import counter from '../../public/images/counter.jpg';
//import particles from '../../public/images/particles.jpg';
import manometer from '../../public/images/manometer.png';
import Image from 'next/image';

const equipments = [
    //{ title: 'Mini Capt', image: particles, description: 'Equipamento para monitoramento de partículas em ambientes controlados.' },
    { title: 'Balômetro', image: balometer, description: 'Equipamento para medição de vazão de ar em sistemas de climatização.' },
    { title: 'Bomba de Calibração', image: bomb, description: 'Equipamento para calibração de sensores de pressão diferencial.' },
    { title: 'Contador de Partículas', image: counter, description: 'Equipamento para monitoramento de partículas em ambientes controlados.' },
    { title: 'Manômetro', image: manometer, description: 'Equipamento para medição de pressão em sistemas de ar comprimido.' },
];

export default function Equipments() {
    return (
        <section className="py-16 bg-sky-900" id='equipments'>
            <div className="container mx-auto px-4">
                <div className='borber border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center text-white'>
                        Conheça nossos equipamentos
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {equipments.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex flex-col items-center justify-center space-y-4'>
                                <h5 className='text-lg font-semibold'>{item.title}</h5>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={100}
                                    height={50}
                                    style={{
                                        maxWidth: '200px',
                                        maxHeight: '150px'
                                    }}
                                    className='object-contain'
                                />
                                <p className='text-sm text-center'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
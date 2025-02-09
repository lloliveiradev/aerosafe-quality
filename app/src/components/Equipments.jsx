import balometer from '../../public/balometer.jpg';
import bomb from '../../public/bomb.jpg';
import counter from '../../public/counter.jpg';
import particles from '../../public/particles.jpg';
import Image from 'next/image';

const equipments = [
    { title: 'Mini Capt', image: particles },
    { title: 'Balômetro', image: balometer },
    { title: 'Bomba de Calibração', image: bomb },
    { title: 'Contador de Partículas', image: counter }
];

export default function Equipments() {
    return (
        <section className="py-16 bg-sky-600">
            <div className="container mx-auto px-4">
                <div className='borber border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center text-white'>
                        Conheça nossos equipamentos
                    </h4>
                    <div className='grid grid-cols-2 gap-8'>
                        {equipments.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex flex-col items-center justify-center space-y-4'>
                                <h5 className='text-lg font-semibold'>{item.title}</h5>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={100}
                                    height={50}
                                    style={{
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Experience() {
    const { t, i18n } = useTranslation();
    const [ experience, setExperience ] = useState(3); 

    return (
        <>
            <div id='experience' className='h-[100vh] flex justify-center items-center'>
                <div className='h-[350px] w-[350px] rounded-[30px] rotate-45 bg-[#CA3E47] mr-[72px] shadow-[0px_0px_40px_25px_rgba(202,62,71,0.5)]'>
                    <img />
                </div>

                <div className='ml-[30px]'>
                    <h3 className='text-[48px] text-red-500 font-bold'>Experiências de trabalho</h3>
                    <div id='line-red-img' className=''></div>

                    <div className='mt-[15px]'>
                        <div className='flex w-full justify-around mb-[10px]'>
                            <button onClick={() => setExperience(1)} className={`w-full flex justify-center ${ experience == 1 && 'border-t-[3px] border-l-[3px] border-r-[3px] border-red-500'}`}>Ycloud</button>
                            <button onClick={() => setExperience(2)} className={`w-full flex justify-center ${ experience == 2 && 'border-t-[3px] border-l-[3px] border-r-[3px] border-red-500'}`}>Eguana</button>
                            <button onClick={() => setExperience(3)} className={`w-full flex justify-center ${ experience == 3 && 'border-t-[3px] border-l-[3px] border-r-[3px] border-red-500'}`}>Linha Direta</button>
                        </div>

                        { experience == 1 && 
                            <div className='w-[576px]'>
                                <h2 className='text-[26px] font-bold'>Estagiário Full-Stack na Ycloud</h2>
                                <p className='text-[16px] text-gray-500'>Janeiro 2017 - Present</p>

                                <ul className='text-[18px] text-gray-400'>
                                    <li className='mt-[10px]'>Desenvolvimento e implantação de um novo sistema, destinado a cadastro e controle de cartões especiais para pessoas deficientes, idosas ou gestantes, que dispõem da necessidade de estacionar em vagas exclusivas.</li>
                                    <li className='mt-[10px]'>Implementação de técnicas de desenvolvimento para a elaboração de sistemas (Documentação técnica de aplicações, utilizando flowcharts e wireframes).</li>
                                    <li className='mt-[10px]'>Colaboração no planejamento de novos sistemas.</li>
                                    <li className='mt-[10px]'>Reestruturação e refatoração de projetos já existentes.</li>
                                </ul>
                            </div>
                        }

                        { experience == 2 &&
                            <div className='w-[576px]'>
                                <h2 className='text-[26px] font-bold'>Desenvolvedor Full-stack Júnior na Eguana</h2>
                                <p className='text-[16px] text-gray-500'>Janeiro 2020 - Present</p>

                                <ul className='text-[18px] text-gray-400'>
                                    <li className='mt-[10px]'>Desenvolvimento e implantação de um novo sistema, destinado a cadastro e controle de cartões especiais para pessoas deficientes, idosas ou gestantes, que dispõem da necessidade de estacionar em vagas exclusivas.</li>
                                    <li className='mt-[10px]'>Implementação de técnicas de desenvolvimento para a elaboração de sistemas (Documentação técnica de aplicações, utilizando flowcharts e wireframes).</li>
                                    <li className='mt-[10px]'>Colaboração no planejamento de novos sistemas.</li>
                                    <li className='mt-[10px]'>Reestruturação e refatoração de projetos já existentes.</li>
                                </ul>
                            </div>
                        }

                        { experience == 3 &&
                            <div className='w-[576px]'>
                                <h2 className='text-[26px] font-bold'>Desenvolvedor Full-stack Júnior no<br /> Linha Direta</h2>
                                <p className='text-[16px] text-gray-500'>Janeiro 2023 - Present</p>

                                <ul className='text-[18px] text-gray-400'>
                                    <li className='mt-[10px]'>Desenvolvimento e implantação de um novo sistema, destinado a cadastro e controle de cartões especiais para pessoas deficientes, idosas ou gestantes, que dispõem da necessidade de estacionar em vagas exclusivas.</li>
                                    <li className='mt-[10px]'>Implementação de técnicas de desenvolvimento para a elaboração de sistemas (Documentação técnica de aplicações, utilizando flowcharts e wireframes).</li>
                                    <li className='mt-[10px]'>Colaboração no planejamento de novos sistemas.</li>
                                    <li className='mt-[10px]'>Reestruturação e refatoração de projetos já existentes.</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience

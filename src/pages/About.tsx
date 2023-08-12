import { useTranslation } from 'react-i18next';

import myImage from '../assets/eu.jpg';

function About() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div id='about' className='h-[100vh] ml-[72px] flex justify-center items-center'>
                <div className='mr-[72px]'>
                <h3>Sobre Mim</h3>
                <div id='line-red-img' className=''></div>

                <div className='w-[576px]'>
                    <p>Atualmente fazendo estágio na área de desenvolvimento na Serget Mobilidade Viária, atuando principalmente na manutenção e desenvolvimento de novas ferramentas, e funcionalidades para usuários dos sistemas públicos e privados da empresa.</p>
                    <p>Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação.</p>
                    <p>Algumas tecnologias que tenho trabalhado recentemente:</p>

                    <div className='flex mt-[15px] justify-around'>
                    <ul className='w-full mr-[5px]'>
                        <li className='mb-[5px] border-[1px] border-red-500'>
                        Javascript (ES6++)

                        </li>
                        <li className='mb-[5px] border-[1px] border-red-500'>
                        Typescript
                        </li>
                        <li className='mb-[5px] border-[1px] border-red-500'>
                        Node.js
                        </li>
                    </ul>

                    <ul className='w-full'>
                        <li className='mb-[5px] border-[1px] border-red-500'>
                        React
                        </li>
                        <li className='mb-[5px] border-[1px] border-red-500'>
                        Vue
                        </li>
                        <li className='mb-[5px] border-[1px] border-red-500'>
                        Asp.net
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className='h-[400px] w-[400px] rounded-full bg-[#CA3E47] flex justify-center items-center shadow-[0px_0px_40px_25px_rgba(202,62,71,0.5)]'>
                    <img src={myImage} className='h-[95%] rounded-full' />
                </div>
            </div>
        </>
    )
}

export default About

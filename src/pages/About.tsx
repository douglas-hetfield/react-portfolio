import { useTranslation } from 'react-i18next';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

import myImage from '../assets/eu.jpg';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const data = {
    labels: ['Laravel', 'Angular', 'Ionic', 'React', 'MySQL'],
    datasets: [
        {
            label: '# de Conhecimento',
            data: [9, 10, 10, 7, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ]
};

export const options = {
    scales: {
        r: {
            color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo'],
            grid: {
                color: ['white', 'red', 'grey']
            },
            angleLines: {
                color: 'white'
            },
            pointLabels: {
                color: 'white'
            },
            ticks: {
                color: 'red',

            }
        }
    },
};

function About() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div id='about' className='h-[100vh] flex justify-center items-center'>
                <div className='mr-[72px]'>
                    <h3>Sobre Mim</h3>
                    <div id='line-red-img' className=''></div>

                    <div className='w-[576px]'>
                        <p>Atualmente fazendo estágio na área de desenvolvimento na Serget Mobilidade Viária, atuando principalmente na manutenção e desenvolvimento de novas ferramentas, e funcionalidades para usuários dos sistemas públicos e privados da empresa.</p>

                        <div className='flex mt-[15px] justify-around w-full px-[40px]'>

                        <Radar
                            data={data}
                            options={options}
                            />
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

import { useTranslation } from 'react-i18next';

import mask from '../assets/mask-group.png';

function CardProject() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className='max-w-[320px] w-full rounded-[10px] border-[1px] border-gray-900 flex flex-col p-[14px]'>
                <img src={mask} className='w-[292px] h-[162px]'/>

                <h2 className='font-bold text-[22px] border-b-[1px] border-gray-900 mt-[10px] pb-[5px]'>Nome do Projeto</h2>

                <p className='text-[16px] text-gray-500 mt-[10px] mb-[10px]'>An incredible pokedex, for you to delve into the pokemon universe and even choose your favorite pokemons and add them to your profile!</p>

                <div className='text-[14px] text-red-400 flex justify-around'>
                    <span>Angular</span>
                    <span>Laravel</span>
                    <span>MySql</span>
                    <span>Ionic</span>
                </div>
                <div className='mt-[18px]'>
                    { /* adicionar icones para de: ir para o site do projeto / link do repositorio */}
                </div>
            </div>
        </>
    )
}

export default CardProject

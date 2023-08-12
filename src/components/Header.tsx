import { useTranslation } from 'react-i18next';
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { AiTwotoneExperiment, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { useState } from 'react'

import br from '../assets/flags/br.svg';
import us from '../assets/flags/us.svg';
import es from '../assets/flags/es.svg';

function Header(){
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState<string>('hello');

    function selectLanguage(language:string){
        i18n.changeLanguage(language);
        setIsOpen(false);
    }

    function selectCategory(idReference:string){
        setCategory(idReference);
    }

    return (
        <>
            <header className='bg-[#393939] h-[100px] flex row justify-center items-center fixed w-full z-[1]'>
                <nav className='flex gap-[50px]'>
                    <span className='text-[29px]'>
                    <a href='#hello' onClick={() => selectCategory("hello")}>
                        <FaHome className={`${category == 'hello' ? 'fill-[#CA3E47]' : 'fill-[#666666]'}`}></FaHome>
                    </a>
                    </span>
                    <span className='text-[29px]'>
                    <a href='#about' onClick={() => selectCategory("about")}>
                        <SiAboutdotme className={`${category == 'about' ? 'fill-[#CA3E47]' : 'fill-[#666666]'}`}></SiAboutdotme>
                    </a>
                    </span>
                    <span className='text-[29px]'>
                    <a href='#experience' onClick={() => selectCategory("experience")}>
                        <AiTwotoneExperiment className={`${category == 'experience' ? 'fill-[#CA3E47]' : 'fill-[#666666]'}`}></AiTwotoneExperiment>
                    </a>
                    </span>
                    <span className='text-[29px]'>
                    <a href='#projects' onClick={() => selectCategory("projects")}>
                        <AiOutlineFundProjectionScreen className={`${category == 'projects' ? 'fill-[#CA3E47]' : 'fill-[#666666]'}`}></AiOutlineFundProjectionScreen>
                    </a>
                    </span>
                </nav>

                <span className='absolute right-[86px] text-[29px]'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                    <IoLanguageSharp className="fill-[#CA3E47]"></IoLanguageSharp>
                    </button>

                    {isOpen && (
                    <div className="absolute z-10 mt-1 w-[140px] left-[-110px] rounded-md shadow-lg bg-white ">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button onClick={() => selectLanguage("pt")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex w-full justify-between" role="menuitem">
                            Português
                            <img src={br} className='w-[30px]' />
                        </button>
                        <button onClick={() => selectLanguage("en")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex w-full justify-between" role="menuitem">
                            English
                            <img src={us} className='w-[30px]' />
                        </button>
                        <button onClick={() => selectLanguage("es")} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex w-full justify-between" role="menuitem">
                            Español
                            <img src={es} className='w-[30px]' />
                        </button>
                        </div>
                    </div>
                    )}
                </span>
            </header>
        </>
    )
}

export default Header
import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { AiTwotoneExperiment, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoLanguageSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

import myImage from './assets/eu.jpg';
import br from './assets/flags/br.svg';
import us from './assets/flags/us.svg';
import es from './assets/flags/es.svg';


function App() {
  const { t, i18n } = useTranslation();

  const [category, setCategory] = useState<string>('hello');
  const [isOpen, setIsOpen] = useState(false)

  function selectCategory(idReference:string){
    setCategory(idReference);
  }

  function selectLanguage(language:string){
    i18n.changeLanguage(language);
  }
  
  return (
    <>
      <div id='line-red' className='w-[5px] bg-[#CA3E47]  h-full absolute shadow-[1px_0px_9px_3px_rgba(202,62,71,0.5)]'></div>

      <div className='bg-[#313131] text-white'>
        <header className='bg-[#393939] h-[100px] flex row justify-center items-center fixed w-full'>
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

        <div id='body' className=''>
          <div id='hello' className='ml-[72px] flex h-[100vh] items-center'>
            <div id='lines-red' className='h-[275px] w-[117px] border-t-[3px] border-l-[3px] border-[#CA3E47]'></div>

            <div className='w-[787px]'>
              <div>
                <h4 className='text-[36px] text-[#979797]'>{ t('hello') },</h4>
                <h2 className='text-[48px] text-white'>Eu sou</h2>
                <h2 className='text-[48px] text-[#CA3E47]'>Douglas Teixeira</h2>
              </div>

              <div id='resume'>
                <p className='text-white'>Atualmente desenvolvedor Full-stack júnior na empresa Linha Direta,
                  atuando diretamente na manutenção e desenvolvimento de novas funcionalidades em todo ecossistema do Linha Direta.</p>
              </div>
              <button className='border-[#CA3E47] border-[1px] text-white'>Contactar agora</button>
            </div>

              {/* <div id='radius-line-red' className='rounded-full border-[18px] border-[#CA3E47] h-[560px] w-[560px] absolute right-[-320px] flex justify-center items-center'>
                <div className='rounded-full border-[18px] border-[#CA3E47] h-[360px] w-[360px]'></div>
              </div> */}
          </div>

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
                    <li className='mb-[5px] border-[1px] border-red-600'>
                      Javascript (ES6++)

                    </li>
                    <li className='mb-[5px] border-[1px] border-red-600'>
                      Typescript
                    </li>
                    <li className='mb-[5px] border-[1px] border-red-600'>
                      Node.js
                    </li>
                  </ul>

                  <ul className='w-full'>
                    <li className='mb-[5px] border-[1px] border-red-600'>
                      React
                    </li>
                    <li className='mb-[5px] border-[1px] border-red-600'>
                      Vue
                    </li>
                    <li className='mb-[5px] border-[1px] border-red-600'>
                      Asp.net
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='h-[400px] w-[400px] rounded-full bg-[#CA3E47] flex justify-center items-center'>
              <img src={myImage} className='h-[95%] rounded-full' />
            </div>
          </div>

          <div id='experience' className='h-[100vh] ml-[72px] flex justify-center items-center'>
            <div className='mr-[72px]'>
              <h3>Experiências de trabalho</h3>
              <div id='line-red-img' className=''></div>

              <div className='w-[576px]'>
                <p>Atualmente fazendo estágio na área de desenvolvimento na Serget Mobilidade Viária, atuando principalmente na manutenção e desenvolvimento de novas ferramentas, e funcionalidades para usuários dos sistemas públicos e privados da empresa.</p>
                <p>Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação.</p>
                <p>Algumas tecnologias que tenho trabalhado recentemente:</p>

                <ul>
                  <li>Javascript (ES6++)</li>
                  <li>Typescript</li>
                  <li>Node.js</li>
                </ul>

                <ul>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Asp.net</li>
                </ul>
              </div>
            </div>

            <div className='h-[400px] w-[400px] rounded-full bg-[#CA3E47]'>
              <img />
            </div>
          </div>

          <div id='projects' className='h-[100vh] ml-[72px] flex justify-center items-center'>
            <div className='mr-[72px]'>
              <h3>Projetos</h3>
              <div id='line-red-img' className=''></div>

              <div className='w-[576px]'>
                <p>Atualmente fazendo estágio na área de desenvolvimento na Serget Mobilidade Viária, atuando principalmente na manutenção e desenvolvimento de novas ferramentas, e funcionalidades para usuários dos sistemas públicos e privados da empresa.</p>
                <p>Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação.</p>
                <p>Algumas tecnologias que tenho trabalhado recentemente:</p>

                <ul>
                  <li>Javascript (ES6++)</li>
                  <li>Typescript</li>
                  <li>Node.js</li>
                </ul>

                <ul>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Asp.net</li>
                </ul>
              </div>
            </div>

            <div className='h-[400px] w-[400px] rounded-full bg-[#CA3E47]'>
              <img />
            </div>
          </div>

        </div>

        <footer></footer>
      </div>
    </>
  )
}

export default App

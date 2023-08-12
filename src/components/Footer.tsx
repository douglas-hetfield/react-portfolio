import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <footer id='footer' className='flex flex-col justify-center items-center h-screen relative'>
                <h2 className='text-[32px] text-red-500 '>O que Fazer agora?</h2>
                <h1 className='text-[45px] font-bold'>Faça contato comigo</h1>

                <p className='text-[22px] text-gray-300'>Escolha sua plataforma preferida para se conectar comigo.</p>

                <span className='mt-[95px] rounded-[15px] border-red-500 border-[1px] w-4/5 h-[60px] flex justify-around'>
                    <button>Whatsapp</button>
                    <button>Linkedin</button>
                    <button>Instagran</button>
                    <button>Email</button>
                </span>

                <div id='radius-line-red-footer' className='rounded-full border-[18px] border-[#CA3E47] h-[560px] w-[560px] absolute flex justify-center items-center'>
                    <div className='rounded-full border-[18px] border-[#CA3E47] h-[360px] w-[360px]'></div>
                </div>
            </footer>
        </>
    )
}

export default Footer

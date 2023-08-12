import { useTranslation } from 'react-i18next';

function Hello() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div id='hello' className='ml-[72px] flex h-[100vh] items-center'>
            <div id='lines-red' className='h-[275px] w-[117px] border-t-[3px] border-l-[3px] border-[#CA3E47]'></div>
    
            <div className='w-[787px]'>
                <div>
                <h4 className='text-[36px] text-[#979797]'>{ t('hello') },</h4>
                <h2 className='text-[48px] text-white'>Eu sou</h2>
                <h2 className='text-[48px] text-[#CA3E47]'>Douglas Teixeira</h2>
                </div>
    
                <div id='resume' className='mb-[100px]'>
                    <p className='text-white'>Atualmente desenvolvedor Full-stack júnior na empresa Linha Direta,
                        atuando diretamente na manutenção e desenvolvimento de novas funcionalidades em todo ecossistema do Linha Direta.</p>
                </div>
                <a href='#footer' className='border-[#CA3E47] border-[1px] text-white max-w-[344px] w-full h-[69px] rounded-[15px]'>Contactar agora</a>
            </div>
    
                {/* <div id='radius-line-red' className='rounded-full border-[18px] border-[#CA3E47] h-[560px] w-[560px] absolute right-[-320px] flex justify-center items-center'>
                <div className='rounded-full border-[18px] border-[#CA3E47] h-[360px] w-[360px]'></div>
                </div> */}
            </div>
        </>
    )
}

export default Hello

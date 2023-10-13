import { useTranslation } from 'react-i18next';
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import InstagramLogo from '../assets/Instagram_logo.svg';

function Contact() {
    const { t, i18n } = useTranslation();

    function openPreferContact(option:'whatsapp'|'linkedin'|'instagram'|'email'){
        switch(option){
            case 'whatsapp':
                window.open('https://wa.me/5521974839530', '_blank');
            break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/douglas-teixeira-433a64123', '_blank');
            break;
            case 'instagram':
                window.open('https://www.instagram.com/douglas.hetf1eld/', '_blank');
            break;
            case 'email':
                window.open('mailto:douglas.sevenx@hotmail.com', '_blank');
            break;
        }
    }

    return (
        <>
            <div id='contact' className='h-[100vh] flex flex-col justify-center items-center'>
                <h2 className='text-[32px] text-red-500 '>O que Fazer agora?</h2>
                <h1 className='text-[45px] font-bold'>Faça contato comigo</h1>

                <p className='text-[22px] text-gray-300'>Escolha sua plataforma preferida para se conectar comigo.</p>

                <span className='mt-[95px] rounded-[15px] border-red-500 border-[1px] w-4/5 h-[60px] flex justify-around'>
                    <button className='flex justify-center items-center gap-[3px] group' onClick={() => openPreferContact('whatsapp')}>
                        <AiOutlineWhatsApp className="text-[30px] group-hover:text-[#25D366]"/> Whatsapp
                    </button>
                    <button className='flex justify-center items-center gap-[3px] group' onClick={() => openPreferContact('linkedin')}>
                        <BsLinkedin className="text-[30px] group-hover:text-[#0e76a8]"/> Linkedin
                    </button>
                    <button className='flex justify-center items-center gap-[3px] group' onClick={() => openPreferContact('instagram')}>
                        <AiOutlineInstagram className="text-[30px] flex group-hover:hidden"/>
                        <img src={InstagramLogo} className="h-[24px] mr-[3px] ml-[3px] hidden group-hover:flex"/>
                        <span className='text-white'>Instagran</span>
                    </button>
                    <button className='flex justify-center items-center gap-[3px] group' onClick={() => openPreferContact('email')}>
                        <AiOutlineMail className="text-[30px] group-hover:text-red-600"/> Email
                    </button>
                </span>
            </div>
        </>
    )
}

export default Contact

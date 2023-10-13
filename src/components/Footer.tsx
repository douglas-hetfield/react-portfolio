import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <>
            <footer id='footer' className='flex justify-center items-end'>
                <p>Douglas Teixeira {year}</p>
            </footer>
        </>
    )
}

export default Footer

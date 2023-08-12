import { useTranslation } from 'react-i18next';
import CardProject from '../components/CardProject';

function Projects() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div id='projects' className='flex justify-center items-center flex-wrap gap-[44px]'>
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />

            </div>
        </>
    )
}

export default Projects

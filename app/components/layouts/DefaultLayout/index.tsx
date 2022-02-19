import Head from 'next/head';
import styles from './DefaultLayout.module.scss';
import Footer from '../../modules/Footer';
import { useContext } from 'react';
import { Store } from '../../../utils/Store';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
const DynamicHeader = dynamic(() => import('../../modules/Header'), {
    ssr: false,
});

const DefaultLayout = ({
    title,
    children,
}: {
    title?: string;
    children: JSX.Element;
}) => {
    const { state } = useContext(Store);
    const { darkMode } = state;

    const themeChecker = () => {
        if (Cookies.get('darkMode' || darkMode === true) === 'ON') {
            return 'dark-mode';
        } else return 'light-mode';
    };

    return (
        <div className={styles[`${themeChecker()}`]}>
            <Head>
                <title>
                    {title ? `${title} - Amazona Next` : 'Amazona Next'}
                </title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <DynamicHeader />

            <main className={styles.main}>{children}</main>

            <Footer />
        </div>
    );
};

export default DefaultLayout;

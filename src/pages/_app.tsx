import { AppProps } from 'next/app';
import GlobalStyle from '@/style/globalStyles';
import '@/style/fonts.css'
import ScrollBarProvider from '@/context/ScrollBarContext';
import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SWRConfig value={{ fetcher }}>
            <ScrollBarProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </ScrollBarProvider>
        </SWRConfig>
    );
};

export default MyApp;

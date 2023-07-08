import React, {ReactNode} from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import { BasePageProps } from '@/interfaces';
import Sandwich from '@/components/common/Sandwich/Sandwich';
import {Box, ThemeProvider} from "@mui/material";
import {theme} from "@/style/theme";


interface LayoutProps extends BasePageProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, meta, header, sandwich }) => {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="og:title" content={meta.title} />
                <meta name="og:description" content={meta.description} />
            </Head>

            <ThemeProvider theme={theme}>
                <Header {...header} />

                <Sandwich {...sandwich} />

                <Box sx={{margin: '70px 120px 0 120px'}}>
                    {children}
                </Box>
            </ThemeProvider>

        </>
    );
};

export default Layout;

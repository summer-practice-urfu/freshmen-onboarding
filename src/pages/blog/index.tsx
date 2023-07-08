import { FC } from 'react';
import { BasePageProps } from '@/interfaces';
import Layout from '@/components/common/Layout/Layout';
import { GetStaticProps } from 'next';
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import {Box} from "@mui/material";

interface IndexProps extends BasePageProps {}

const Index: FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            <Box sx={{paddingTop: '40px'}}>
                <SearchBar/>
                <h1>Some text</h1>
                <h1>Some text</h1>
                <h1>Some text</h1>
                <h1>Some text</h1>
                <h1>Some text</h1>
                <h1>Some text</h1>
                <h1>Some text</h1>
            </Box>

        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    return {
        props: {
            meta: {
                title: 'Blog',
                description: 'description',
                keywords: 'keywords'
            },
            header: {},
            sandwich: {},
            onboarding: {}
        },
        revalidate: 1
    };
};

export default Index;

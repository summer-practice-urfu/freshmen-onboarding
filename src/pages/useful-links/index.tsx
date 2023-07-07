import { FC } from 'react';
import { BasePageProps } from '@/interfaces';
import Layout from '@/components/common/Layout/Layout';
import { GetStaticProps } from 'next';

interface IndexProps extends BasePageProps {}

const Index: FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            <h1>Some text</h1>
            <h1>Some text</h1>
            <h1>Some text</h1>
            <h1>Some text</h1>
            <h1>Some text</h1>
            <h1>Some text</h1>
            <h1>Some text</h1>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    return {
        props: {
            meta: {
                title: 'Q&A',
                description: 'useful links',
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

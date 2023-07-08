import {FC} from 'react';
import {BasePageProps} from '@/interfaces';
import Layout from '@/components/common/Layout/Layout';
import {GetStaticProps} from 'next';
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import {Box} from "@mui/material";
import BlogCard from "@/components/ui/BlogCard/BlogCard";

interface IndexProps extends BasePageProps {
}

const Index: FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            <Box sx={{paddingTop: '40px'}}>
                <SearchBar/>
                <Box sx={{
                    marginTop: '40px',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(auto-fill, 250px)',
                    gridColumnGap: '30px',
                    gridRowGap: '40px'
                }}>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </Box>
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

import React from 'react';
import {Box, Paper, Typography} from "@mui/material";

interface BlogCardProps {
    /* Component props */
}

const BlogCard: React.FC<BlogCardProps> = () => {
    const testPhotoLink = 'https://sun4-20.userapi.com/impg/3bXBovKnRdElgGSsZJbTqCtyzk0Q0-J2hxzfEg/T8K39vpiBYE.jpg?size=1080x717&quality=96&sign=b6769848c28c2c5e08a4fe7df90696e9&type=album'
    const text = 'Тестовый заголовок'
    return (
        <Paper sx={{
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-end',
            background: `url('${testPhotoLink}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'round',
            borderRadius: '13px'
        }}>
            <Box sx={{}}>
                <Typography variant='h4' sx={{color: '#fff'}}>&#47;&#47;{text}</Typography>
            </Box>
        </Paper>
    )
}

export default BlogCard;
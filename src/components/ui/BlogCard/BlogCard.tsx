import React, {useEffect, useState} from 'react';
import {Box, Link, Typography} from "@mui/material";

interface BlogCardProps {
    rating: number
}

type TRatingColor = '6CCE5C' | 'D9CD64' | 'C54B4B' | '9B9B9B'

const BlogCard: React.FC<BlogCardProps> = ({rating}) => {
    const testPhotoLink = 'https://sun4-20.userapi.com/impg/3bXBovKnRdElgGSsZJbTqCtyzk0Q0-J2hxzfEg/T8K39vpiBYE.jpg?size=1080x717&quality=96&sign=b6769848c28c2c5e08a4fe7df90696e9&type=album'
    const text = 'Тестовый заголовок'
    const testHref = '#'
    const [backgroundColor, setBackgroundColor] = useState<TRatingColor>('9B9B9B')
    useEffect(() => {
        if (rating > 10) {
            setBackgroundColor('6CCE5C')
        } else if (rating > 1) {
            setBackgroundColor('D9CD64')
        } else if (rating === 0) {
            setBackgroundColor('9B9B9B')
        } else {
            setBackgroundColor('C54B4B')
        }
    }, [])

    return (
        <Link underline='none' href={testHref} sx={{
            padding: '20px',
            width: '100%',
            display: 'block',
            // display: 'flex',
            // alignItems: 'flex-end',
            background: `url('${testPhotoLink}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'round',
            borderRadius: '13px',
            cursor: 'pointer'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-end',
                alignContent: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
            }}>
                <Typography variant='h4' sx={{color: '#fff'}}>&#47;&#47;{text}</Typography>
                <Box sx={{width: '40px', height: '40px', display: "flex", justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: `#${backgroundColor}`}}>
                    <Typography variant='body1' sx={{color: '#fff'}}>{rating}</Typography>
                </Box>
            </Box>

        </Link>
    )
}

export default BlogCard;
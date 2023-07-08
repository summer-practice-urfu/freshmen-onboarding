import React, {useState} from 'react';
import {AppBar, Avatar, Box, Link, Typography} from "@mui/material";

export interface HeaderProps {
    /* Component props */
}

interface ILink {
    text: string,
    href: string,
}

const linkList: ILink[] = [
    {
        text: 'Онбординг',
        href: '/'
    },
    {
        text: 'Блог',
        href: '/blog'
    },
    {
        text: 'Полезные ссылки',
        href: '/useful-links'
    },
    {
        text: 'Q&A',
        href: '/Q&A'
    }
]
// TODO поправить роутинг, header не должен ререндериться при переходе
const Header: React.FC<HeaderProps> = () => {
    const [isAuth, setIsAuth] = useState(true)
    return (
        <AppBar sx={{
            height: '70px',
            padding: '0 120px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(73, 105, 181, 1)'
        }}>
            <Box sx={{display: 'flex', gap: '45px'}}>
                {linkList.map((link) => {
                    return (
                        <Link key={link.text} underline='hover' href={link.href}>
                            <Typography variant='h6' sx={{color: '#fff'}}>{link.text}</Typography>
                        </Link>
                    )
                })}
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                {isAuth ? (
                    <>
                        <Typography variant='body1'>Фамилия Имя</Typography>
                        <Avatar
                            src='https://sun9-28.userapi.com/impg/bnvB7ypixlyiFYL4DDlbLuG_joNwymTW_q1XJQ/NAABcabJw74.jpg?size=1620x2160&quality=95&sign=0895bd96c6ff0c918b31cf0f00f9fb08&type=album'/>
                    </>
                ) : (
                    <Typography variant='body1'>Авторизация</Typography>
                )}
            </Box>
        </AppBar>
    )
}

export default Header;
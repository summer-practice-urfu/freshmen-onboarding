import React from 'react';
import {FormControl, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    /* Component props */
}

const SearchBar: React.FC<SearchBarProps> = () => {
    return (
        <FormControl fullWidth>
            <InputLabel>Поиск по статьям</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={'text'}
                endAdornment={
                    <InputAdornment position="end">
                       <SearchIcon />
                    </InputAdornment>
                }
                label="Поиск по статьям"
                sx={{borderRadius: '12px', backgroundColor: '#F2F2F2'}}
            />
        </FormControl>
    )
}

export default SearchBar;
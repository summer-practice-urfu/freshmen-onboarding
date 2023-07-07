import { createTheme } from '@mui/material';

export const theme = createTheme();

theme.typography.h1 = {
    fontSize: '6rem',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '116.7%',
    letterSpacing: '-1.5px',
    '@media (max-width:767px)': {
        fontSize: '3.375rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '4rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '5.375rem'
    }
};
theme.typography.h2 = {
    fontSize: '3.75rem',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '120%',
    letterSpacing: '-0.5px',
    '@media (max-width:767px)': {
        fontSize: '2.75rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '3rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '3rem'
    }
};
theme.typography.h3 = {
    fontSize: '3rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '116.7%',

    '@media (max-width:767px)': {
        fontSize: '2.25rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '2.375rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '2.625rem'
    }
};
theme.typography.h4 = {
    fontSize: '2.125rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '123.5%',
    letterSpacing: '0.25px',
    '@media (max-width:767px)': {
        fontSize: '1.625rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '1.75rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '1.875rem'
    }
};
theme.typography.h5 = {
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '133.4%',
    '@media (max-width:767px)': {
        fontSize: '1.625rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '1.25rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '1.25rem'
    }
};
theme.typography.h6 = {
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '140%',
    letterSpacing: '0.15px',
    '@media (max-width:767px)': {
        fontSize: '1rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '1rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '1.125rem'
    }
};
theme.typography.caption = {
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '166%',
    letterSpacing: '0.4px',
    '@media (max-width:767px)': {
        fontSize: '0.75rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.75rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.75rem'
    }
};
theme.typography.overline = {
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '266%',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '@media (max-width:767px)': {
        fontSize: '0.75rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.75rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.75rem'
    }
};
theme.typography.subtitle2 = {
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '157%',
    letterSpacing: '0.1px',
    '@media (max-width:767px)': {
        fontSize: '0.8125rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.8125rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.875rem'
    }
};
theme.typography.subtitle1 = {
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '175%',
    letterSpacing: '0.15px',
    '@media (max-width:767px)': {
        fontSize: '0.875rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.875rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.9375rem'
    }
};
theme.typography.body2 = {
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '143%',
    letterSpacing: '0.17px',
    '@media (max-width:767px)': {
        fontSize: '0.75rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.75rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.8125rem'
    }
};
theme.typography.body1 = {
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150%',
    letterSpacing: '0.15px',
    '@media (max-width:767px)': {
        fontSize: '0.8125rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.875rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.9375rem'
    }
};
theme.typography.button = {
    fontSize: '0.9375rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '173.3%',
    letterSpacing: '0.46px',
    '@media (max-width:767px)': {
        fontSize: '0.8125rem'
    },
    '@media (max-width:1024px)': {
        fontSize: '0.8125rem'
    },
    '@media (max-width:1440px)': {
        fontSize: '0.875rem'
    }
};

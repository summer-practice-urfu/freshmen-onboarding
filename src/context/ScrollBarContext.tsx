import {createContext, useState, useContext, useEffect, FC, ReactNode} from 'react';
import OnlyScroll from 'only-scrollbar';

type ScrollBarContextType = OnlyScroll | null;

const ScrollBarContext = createContext<ScrollBarContextType>(null);
export const useScrollBar = () => useContext(ScrollBarContext);

interface ScrollBarProviderProps {
    children: ReactNode
}

const ScrollBarProvider: FC<ScrollBarProviderProps> = ({ children }) => {
    const [scrollBar, setScrollBar] = useState<ScrollBarContextType>(null);

    useEffect(() => {
        setScrollBar(new OnlyScroll(window));

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        return () => scrollBar?.destroy();
    }, []);

    return <ScrollBarContext.Provider value={scrollBar}>{children}</ScrollBarContext.Provider>;
};

export default ScrollBarProvider;

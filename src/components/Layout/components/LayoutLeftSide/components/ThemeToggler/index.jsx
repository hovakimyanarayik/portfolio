import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from 'react-icons/io5'
import styled from "styled-components";

const ThemeToggler = () => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    
    return (
        <ModeSwitcher onClick={() => {
            setTheme(prev => prev === 'light' ? 'dark' : 'light')
        }}>
            {theme === 'light' ? (
                <> <IoMoon /> Dark mode </>
            ) : (
                <> <IoSunny /> Light mode</> 
            )}
        </ModeSwitcher>
    )
}

const ModeSwitcher = styled.div`
    cursor: pointer;
    color: var(---colors-text);
    text-shadow: var(--shadow);
    background-color: var(--colors-bg);
`
 
export default ThemeToggler;
import { createContext } from 'react'

export type ThemeContextType = {
	mode: string
	toggle: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
	mode: 'dark',
	toggle: () => {},
})

'use client'

import { createContext, useState } from 'react'

type ThemeContextValue = {
	toggle: () => void
	mode: string
}

export const ThemeContext = createContext<ThemeContextValue>({
	toggle: () => {},
	mode: 'dark',
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState('dark')

	const toggle = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
	}

	const value: ThemeContextValue = {
		toggle,
		mode,
	}

	return (
		<ThemeContext.Provider value={value}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	)
}

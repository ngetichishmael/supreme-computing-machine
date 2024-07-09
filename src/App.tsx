import './App.css'
import {Countries} from "./Countries.tsx";
import {ThemeProvider} from "@/components/ThemeProvider"

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Countries/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App

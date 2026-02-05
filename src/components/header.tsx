import { JSX } from "react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "./theme-toggle"

export const Header = (): JSX.Element => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo />
                <ThemeToggle />
            </div>
            <div className="flex items-center gap-3">
                ...
            </div>
        </header>
    )
}
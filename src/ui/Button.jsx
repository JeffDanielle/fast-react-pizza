import { Link } from "react-router-dom"

function Button({ children, disabled, to, type }) {
    const base = "bg-yellow-400 uppercase text-s, font-semibold text-stone-800 py-3 px-4 inline-block rounded-full hover:bg-yellow-300 transition ease-in-out delay-50 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"


    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary: "px-4 py-2.5 text-sm md:px-6 md:py-3.5 bg-transparent border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block rounded-full hover:bg-stone-300 transition ease-in-out delay-50 focus:text-stone-800 focus:outline-none hover:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"

    }

    if (to)
        return <Link className={styles[type]} to={to}>{children}</Link>
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button

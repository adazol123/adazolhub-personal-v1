import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [pathname])

    return null
}
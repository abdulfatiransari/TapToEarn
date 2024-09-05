import { Context } from "@/components/Context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [active, setActive] = useState<string>("Home");
    return (
        <Context.Provider value={{ active, setActive }}>
            <Component {...pageProps} />
        </Context.Provider>
    );
}

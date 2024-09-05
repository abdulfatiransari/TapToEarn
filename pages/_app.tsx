import { Context } from "@/components/Context";
import "@/styles/globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [active, setActive] = useState<string>("Home");
    return (
        <Context.Provider value={{ active, setActive }}>
            <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
                <Component {...pageProps} />
            </TonConnectUIProvider>
        </Context.Provider>
    );
}

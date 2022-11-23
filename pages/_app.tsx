import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & { getLayout?: (page: ReactElement) => ReactNode };

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

// Component: componente que se está renderizando en el request
// pageProps: atributos que llegan al page

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // estamos haciendo que si el componente tiene la propiedad getLayout, entonces que renderice los layouts que tiene
  // el operador ?? retorna el primer valor si existe, sino el otro. Casi similar al ||
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(<Component {...pageProps} />);
}

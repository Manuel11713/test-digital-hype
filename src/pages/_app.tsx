import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

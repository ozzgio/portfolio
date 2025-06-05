import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import { AnimatePresence } from "framer-motion";
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router, cookies }) {
    return (
        <ChakraProvider
            theme={theme}
            colorModeManager={
                typeof cookies === 'string'
                    ? cookieStorageManagerSSR(cookies)
                    : localStorageManager
            }
        >
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode='wait' initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

Website.getInitialProps = async ({ ctx }) => {
    return {
        cookies: ctx.req?.headers.cookie ?? '',
    };
};

export default Website;

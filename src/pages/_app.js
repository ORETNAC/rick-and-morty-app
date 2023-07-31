import '@/styles/globals.css'
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';///




export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>)
}

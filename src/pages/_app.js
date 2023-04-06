import "@/styles/globals.css";
import ProgressBar from "nextjs-progressbar";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "@/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ProgressBar
        color="#7fb4e894"
        options={{
          easing: "easeInOut",
        }}
      />
      <Toaster position="bottom-center" reverseOrder={false} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

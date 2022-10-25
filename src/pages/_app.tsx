import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/auth";
import { Provider } from "react-redux";
import { store } from "@/redux";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;

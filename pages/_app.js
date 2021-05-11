import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from 'firebase/app';
import theme from '../app/components/themes';
import { store } from '../app/lib/utility/store';
import { reducer } from '../app/lib/utility/reducer';
import 'react-multi-carousel/lib/styles.css';
import firebaseCloudMessaging from '../config/webPush';

export const GlobalContext = React.createContext();
let socket;

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [globalState, dispatch] = useReducer(reducer, store);

  React.useEffect(() => {
    const getMessage = () => {
      const messaging = firebase.messaging();
      // console.log({ messaging });
      // console.log('Ginger message');

      messaging.onMessage(() => {
        // console.log('Ginger message', message);
        // const { title, body } = JSON.parse(message.data.notification);
        // const options = {
        //   body,
        // };
        // runtime.register().then((registration) => {
        //   registration.showNotification(title, options);
        // });
      });
    };
    const setToken = async () => {
      try {
        const token = await firebaseCloudMessaging.init();
        // console.log('Reached Mocha', token);
        if (token) {
          getMessage();
        }
      } catch (error) {
        // console.log(error);
      }
    };
    setToken();
  });
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    if (!socket) {
      // socket = io.connect('http://localhost:8080');
      socket = io.connect('https://spidy-server.herokuapp.com/');
    }
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{ state: globalState, allDispatch: dispatch }}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Spider</title>
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />

          <link rel="apple-touch-icon" href="/static/images/bill.png" />
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

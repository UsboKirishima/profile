import type { NextPage } from 'next'
import styled from 'styled-components';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Home from './Home';
import Link from 'next/link';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';

const App: NextPage = () => {
  return (
      <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta property="og:type" content="website" />
	      <meta property="og:url" content="https://usbo.ml" />
	      <meta property="og:title" content="Usbo Kirishima" />
	      <meta property="og:description" content="Just a random programmer from Italy" />
        <meta property="og:image" content="public/timmy.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />

        <title>Usbo Kirishima</title>
        <link rel="shortcut icon" href="public/timmy.jpg" type="image/x-icon"/>
      </Head>
      <Wrapper>
        <div className={styles.linus_cit}>
         <Link href='/Home'>
            <h4><a href='#' id={styles.goto}>Go to website 🚀</a></h4>
         </Link>
          <h1>Software is like sex, it&aposs better when it&aposs free.</h1>
        </div>
      </Wrapper>
      </>
  );


}

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
color: #C3BAC6;
`;

export default App;

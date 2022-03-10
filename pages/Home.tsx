import styled from "styled-components";
import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { Presence } from "../components/Presence";

const Home: NextPage = () => {
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
        <Navbar />
        <Wrapper>
            <Title>Who am i</Title>
            <Description>
                usbo. 16yo Student & Developer.
            </Description>
            <Description>
                I made beautiful sites and web applications using popoulars web frameworks<br/>
                like this.
            </Description>
            <Description>
                I also use low-level languages like C and C++ to build console applications<br/>
                and tools for penetration testers.
            </Description>
            <Description>
                Every days I try to learn something new about languages, tools, APIs, wrappers<br/>
                frameworks ecc... 
                especially in the evening while listening to 80'/90' music.
            </Description>
            <h3>About my music</h3>
            <Description>
            I love all genres of music. Based on the circumstances I choose the most suitable songs. <br />
            When I'm programming I like listening to 70'/80'/90' music like The Beatles, Måneskin, <br />
            The Cranberries Guns N' Roses and John Lennon. <br />
            When I'm sad I love to listening electric guitar vibess and the remaked songs of The Last of Us. <br />
            I also love dubstep, edm. Timmy Trumpet, Marshmello, Crypto, Avicii, Gabry Ponte ecc...
            </Description>
            <Presence />
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
margin-left: 15rem;
padding: 2rem;
width: 100%;
box-sizing: border-box;
font-size: 1rem;
color: #C3BAC6;
a {
  &:hover {
    text-decoration: underline;
  }
}
@media (max-width: 850px) {
  margin-left: 0px;
  padding-top: 65px;
}
`;

const Title = styled.h1`
color: #C3BAC6;
`;

const Description = styled.p`
color: #C3BAC6;
`;

const Line = styled.hr`
border: 1px solid #C3BAC6;
float: left;
width: 30%;
margin: 0;
`

export default Home;
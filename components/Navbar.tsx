import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
    return(
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
        <MobileWrapper>
            <Pages>
                <div style={{marginTop: '25px'}}></div>
                <Item href='#'>
                    Home
                </Item>
                <div style={{marginTop: '25px'}}></div>
                <Item href='#'>
                    Projects
                </Item>
                <div style={{marginTop: '25px'}}></div>
                <Item href='#'>
                    Skills
                </Item>
                <div style={{marginTop: '25px'}}></div>
                <Item href='#'>
                    Socials
                </Item>
             </Pages>
        </MobileWrapper>
        <Wrapper>
             <Title>Usbo Kirishima</Title>
             <Pages>
                <div style={{marginTop: '25px'}}></div>
                <Item href='/Home'>
                    Home
                </Item>
                <div style={{marginTop: '25px'}}></div>
                <Item href='/Projects'>
                    Projects
                </Item>
                <div style={{marginTop: '25px'}}></div>
                <Item href='#'>
                    Skills
                </Item>
                <div style={{marginTop: '25px'}}></div>
                <Item href='#'>
                    Socials
                </Item>
             </Pages>
        </Wrapper>
    </>
    );
}

const Wrapper = styled.div`
display: inline-block;
box-sizing: border-box;
flex-direction: column;
padding: 2rem;
position: fixed;
top: 0;
left: 0;
width: 15rem;
border-right: 1px solid #101010;
height: 100vh;
color: #fff;
background: #1E1E2E;

@media (max-width: 850px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
position: fixed;
top: 0;
display: flex;
padding: 2rem;
box-sizing: border-box;
width: 100%;
height: 65px;
background-color: rgba(0, 0, 0, 0.8);
backdrop-filter: blur(5px);
border-bottom: 1px solid #101010;
flex-shrink: 0;
z-index: 1;
color: #fff;

@media (min-width: 850px) {
    display: none;
  }
`;

const Title = styled.div`
  font-weight: 600;
  padding: 10px 0px;
`;

const Pages = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

const Item = styled(Link)`
margin-top: 25px;

&:hover {
    opacity: 50%;
}
`;

export { Navbar };
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import ogImageUrl from '../images/fb_image.png';
 
const GlobalStyle = createGlobalStyle`
  ${reset}
`;
 
const Container = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  min-width: 315px;
  overflow: hidden;
  background-color: black;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Kyllä.' },
            { name: 'keywords', content: 'mäkikupla, pizza, beer, lonkero' },
            { property: 'og:image', content: `https://makikupla.life${ogImageUrl}` },
            { property: 'og:url', content: 'https://makikupla.life' },
            { property: 'og:title', content: 'Mäkikuplaan?' },
            { property: 'og:description', content: 'Kyllä' },
            { property: 'og:type', content: 'website' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyle/>
        <Container>
        {children}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

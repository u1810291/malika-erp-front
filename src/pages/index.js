// material-ui
import { styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';

const Header = dynamic(() => import('components/landingpage/Header'));
const Feature = dynamic(() => import('components/landingpage/Feature'));
const Demos = dynamic(() => import('components/landingpage/Demos'));
const Layouts = dynamic(() => import('components/landingpage/Layouts'));
const KeyFeature = dynamic(() => import('components/landingpage/KeyFeature'));
const Subscribe = dynamic(() => import('components/landingpage/Subscribe'));
const Footer = dynamic(() => import('components/landingpage/Footer'));
const Customization = dynamic(() => import('layout/Customization'));
const AppBar = dynamic(() => import('components/ui-component/extended/AppBar'));
const Page = dynamic(() => import('components/ui-component/Page'));

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 160,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <Page title="Welcome">
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    <SecondWrapper>
      <Feature />
    </SecondWrapper>
    <SecondWrapper>
      <Demos />
    </SecondWrapper>
    <SecondWrapper>
      <Layouts />
    </SecondWrapper>
    <SecondWrapper>
      <KeyFeature />
    </SecondWrapper>
    <SecondWrapper>
      <Subscribe />
    </SecondWrapper>
    <Footer />
    <Customization />
  </Page>
);

Landing.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default Landing;

import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from 'components/ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import navigation from 'menu-items';
import useConfig from 'hooks/useConfig';
import { drawerWidth } from 'store/constant';
import { openDrawer } from 'store/slices/menu';
import { useDispatch, useSelector } from 'store';
import AuthGuard from 'utils/route-guard/AuthGuard';
// assets
import { IconChevronRight } from '@tabler/icons';
import ProtectedSidebar from './ProtectedSidebar';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px'
    }
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shorter
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px'
    }
  })
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

  const router = useRouter();
  const path = router.asPath.split('/')
  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);
  const { container } = useConfig();

  React.useEffect(() => {
    dispatch(openDrawer(!matchDownMd));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  const header = useMemo(
    () => (
      <Toolbar>
        <Header />
      </Toolbar>
    ),
    []
  );

  return (
    <AuthGuard>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* header */}
        <AppBar
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.default,
            transition: drawerOpen ? theme.transitions.create('width') : 'none'
          }}
        >
          {header}
        </AppBar>

        {/* drawer */}
        {path[path.length - 1] === 'default' ? <Sidebar /> : <ProtectedSidebar /> }

        {/* main content */}
        <Main theme={theme} open={drawerOpen}>
          {/* breadcrumb */}
          {container && (
            <Container maxWidth="lg">
              <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
              {children}
            </Container>
          )}
          {!container && (
            <>
              <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
              {children}
            </>
          )}
        </Main>
        <Customization />
      </Box>
    </AuthGuard>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

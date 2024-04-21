import { memo } from 'react';

// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import protectedMenuItems from 'protected-menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const ProtectedMenuList = () => {
  const navItems = protectedMenuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default memo(ProtectedMenuList);

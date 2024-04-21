// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  type: 'group',
  children: [
    {
      id: 'product',
      type: 'item',
      breadcrumbs: true,
      icon: icons.IconBasket,
      url: '/app/customer/product',
      title: <FormattedMessage id="product" />,
    },
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      icon: icons.IconMessages,
      url: '/app/chat'
    },
    // {
    //   id: 'kanban',
    //   title: 'Kanban',
    //   type: 'item',
    //   icon: icons.IconLayoutKanban,
    //   url: '/app/kanban/board'
    // },
    {
      id: 'mail',
      title: <FormattedMessage id="mail" />,
      type: 'item',
      icon: icons.IconMail,
      url: '/app/mail'
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/app/calendar',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'contact',
      title: <FormattedMessage id="contact" />,
      type: 'collapse',
      icon: icons.IconNfc,
      children: [
        {
          id: 'c-card',
          title: <FormattedMessage id="cards" />,
          type: 'item',
          url: '/app/contact/c-card',
          breadcrumbs: false
        },
        {
          id: 'c-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/app/contact/c-list',
          breadcrumbs: false
        }
      ]
    },
  ]
};

export default application;

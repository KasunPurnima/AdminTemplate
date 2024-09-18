// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  CloudUploadOutlined,
  FileDoneOutlined,
  FormOutlined,
  PieChartOutlined,
  StepForwardOutlined,
  TableOutlined,
  InsertRowAboveOutlined
} from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  CloudUploadOutlined,
  FileDoneOutlined,
  FormOutlined,
  PieChartOutlined,
  StepForwardOutlined,
  TableOutlined,
  InsertRowAboveOutlined
};

// ==============================|| MENU ITEMS - FORMS & TABLES ||============================== //

const formsTables: NavItemType = {
  id: 'group-forms-tables',
  title: <FormattedMessage id="forms-tables" />,
  icon: icons.FileDoneOutlined,
  type: 'group',
  children: [
    {
      id: 'validation',
      title: <FormattedMessage id="forms-validation" />,
      type: 'item',
      url: '/maintenance/under-construction',
      icon: icons.FileDoneOutlined
    },
    {
      id: 'wizard',
      title: <FormattedMessage id="forms-wizard" />,
      type: 'item',
      url: '/maintenance/under-construction',
      icon: icons.StepForwardOutlined
    },
    {
      id: 'forms-layout',
      title: <FormattedMessage id="layout" />,
      type: 'collapse',
      icon: icons.FormOutlined,
      children: [
        {
          id: 'basic',
          title: <FormattedMessage id="basic" />,
          type: 'item',
          url: '/maintenance/under-construction'
        },
        {
          id: 'multi-column',
          title: <FormattedMessage id="multi-column" />,
          type: 'item',
          url: '/maintenance/under-construction'
        },
        {
          id: 'action-bar',
          title: <FormattedMessage id="action-bar" />,
          type: 'item',
          url: '/maintenance/under-construction'
        },
        {
          id: 'sticky-bar',
          title: <FormattedMessage id="sticky-bar" />,
          type: 'item',
          url: '/maintenance/under-construction'
        }
      ]
    }
  ]
};

export default formsTables;

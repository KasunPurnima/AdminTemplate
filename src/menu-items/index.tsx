// project import
import dashboard from './dashboard';
import formsTables from './forms-tables';
import other from './other';

// types
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, formsTables, other]
};

export default menuItems;

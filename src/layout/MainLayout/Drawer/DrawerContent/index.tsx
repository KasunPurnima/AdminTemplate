// material-ui

// project import
import SimpleBar from 'components/third-party/SimpleBar';
import Navigation from './Navigation';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => {
  return (
    <SimpleBar
      sx={{
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <Navigation />
    </SimpleBar>
  );
};

export default DrawerContent;

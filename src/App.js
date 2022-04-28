//import logo from './logo.svg';
import './App.scss';
import SideBar from './components/side-bar/SideBar';
import Grid from './components/grid/Grid';
import {Flex, Box} from 'rebass';

function App() {
  // return (
  //   <div className="App">
  //       <Header></Header>
  //       <SideNav></SideNav>
  //       <Grid></Grid>
  //   </div>
  // );

  return (
    <div className="app">
      <Flex
        sx={{
          flexWrap: 'wrap'
        }}>
        <Box
          sx={{
            p: 3,
            flexGrow: 1,
            flexBasis: 256
          }}>
            <SideBar></SideBar>
        </Box>
        <Box
          sx={{
            p: 3,
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320
          }}>
          <Grid></Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default App;


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Grid from '../Grid';
import './style.css'
import List from '../List';

export default function TabComponent({ coins }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontFamily: "Inter",
    fontWeight: 600,
    textTransform: "Capitalize"
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>

      <TabContext value={value}>
        <div >
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />

          </TabList>
        </div>
        <TabPanel value="grid">
          <div className='grid'>
            {
              coins.map((coins, i) => {
                return (
                  <Grid coins={coins} key={i} />
                )
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='list'>
            {
              coins.map((coins, i) => {
                return (
                  <List coins={coins} key={i} />
                )
              })
            }
          </table>
        </TabPanel>

      </TabContext>
    </ThemeProvider>
  );
}
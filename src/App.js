import Header from './Component/Header';
import Nav from './Component/Nav';
import './App.css';
import Data from './Component/Data'
import DisplayCard from './Component/DisplayCard';
import { Grid } from '@mui/material';

function App() {
  const cards = Data.map(item => {
    return (
      <Grid item xs={2}>
        <DisplayCard
          key={item.id}
          {...item}
        />
      </Grid>
    )
  })
  return (
    <div>
      <Nav />
      <Header />
      <div className='grid-content'>
        <Grid container spacing={0}>
          {cards}
        </Grid>
      </div>
    </div>
  );
}

export default App;

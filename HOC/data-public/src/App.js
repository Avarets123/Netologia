import './App.css';
import listItems from './Data/videoList';
import Video from './components/Video';
import uniqid from 'uniqid';

function App() {


  const UseListVideo = () => {
    return listItems.map((i) =>  {
      return < Video i={i} id={uniqid()} />
    })
  }



  
  return (
    <>
      {UseListVideo()}
    </>
  )
}

export default App;

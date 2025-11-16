import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/listcard';
import data from '../data/otherprojects';

export default function() {
  let list = [];
  data.forEach((value, index) => {
    list.push(<Card key={index} project = {value}></Card>)
  });
  return(
    <>
      <Header/>
      <h1>Other Projects</h1>

      <div className='listContainer'>
        {list}
      </div>

      <Footer/>
    </>
  )
}
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import data from '../data/3dsgames';

export default function() {
  let cards = [];
  data.forEach((value, index) => {
    cards.push(<Card key={index} game = {value}></Card>)
  });
  return(
    <>
      <Header/>
      <h1>3DS Games</h1>

      <div className='cardContainer'>
        {cards}
      </div>

      <Footer/>
    </>
  )
}
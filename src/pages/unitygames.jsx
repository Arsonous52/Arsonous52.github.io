import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import data from '../data/unitygames';

export default function() {
  let cards = [];
  data.forEach((value, index) => {
    cards.push(<Card key={index} game = {value}></Card>)
  });
  return(
    <>
      <Header/>
      <div id='content' style={{textAlign:'center'}}>
        <h1>Unity Games</h1>

        <div className='cardContainer'>
          {cards}
        </div>

      </div>
      <Footer/>
    </>
  )
}
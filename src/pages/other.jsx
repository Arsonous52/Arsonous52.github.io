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
      <div id='content' style={{textAlign:'center'}}>

        <div className='container'>
          <h1>Other Projects</h1>
        </div>

        <div className='cardContainer'>
          {list}
        </div>

      </div>
      <Footer/>
    </>
  )
}
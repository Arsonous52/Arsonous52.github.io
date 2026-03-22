import { useParams, useNavigate } from 'react-router';

import Button from '../../components/button';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Direct, Itch} from '../../components/download';
import Carousel from '../../components/carousel';

import games from '../../data/3dsgames'

export default function() {
  const navigate = useNavigate();
  const { id } = useParams();
  const game = games.find(g => g.id === id);

  if (!game) return( 
    <>
      <Header/>
      <div id='content'>
        <div className='container'>
          <Button onClick={() => navigate(-1)}>←Back</Button>
          <h1>Game "{id}" not found.</h1>
        </div>
      </div>
      <Footer/>
    </>
  )

  let itch = <Itch project={game}/>;
  let direct = <Direct project={game}/>;

  return(
    <>
      <Header/>
      <div id='content'>
        <div className='container'>

          <Button onClick={() => navigate(-1)}>←Back</Button>
          <h1>{game.title}</h1>
          <p>{game.description}</p>

          <div>
            {itch}
            {direct}
          </div>

          <Carousel images={game.screenshots}/>
        </div>

      </div>
      <Footer/>
    </>
  )
}
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../../components/button';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Direct, Itch} from '../../components/download';

import games from '../../data/3dsgames'

export default function() {
  const navigate = useNavigate();
  const { id } = useParams();
  const game = games.find(g => g.id === id);

  if (!game) return( 
    <>
      <Header/>
      <div className='container'>
        <Button onClick={() => navigate(-1)}>←Back</Button>
        <h1>Game "{id}" not found.</h1>
      </div>
      <Footer/>
    </>
  )

  let itch = <Itch project={game}/>;
  let direct = <Direct project={game}/>;

  return(
    <>
      <Header/>

      <div className='container'>

        <Button onClick={() => navigate(-1)}>←Back</Button>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        
        <div>
          {itch}
          {direct}
        </div>
        
      </div>

      <Footer/>
    </>
  )
}
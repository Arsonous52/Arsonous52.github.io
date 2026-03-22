import Header from '../components/header';
import Footer from '../components/footer';
import Tile from '../components/tile';

import Unity from '../data/unitygames';
import NDS from '../data/3dsgames';

function getNDSGameFromID(id) {
  return NDS.find(game => game.id === id);
}

function getUnityGameFromID(id) {
  return Unity.find(game => game.id === id);
}

export default function() {
  return(
    <>
      <Header/>
      <div id='content'>

        <div className='container'>
          <h1>About Me</h1>
          <p>
            Hi, I'm Alexander (also known as Arsonous52)! I'm a passionate game developer with a love for programming and everything 3DS. I specialize in designing and building gameplay
            systems that feel fluid and natural to navigate, whether it's fine-tuning turn-based combat, high-octane movement, or simple recreations of the classics.
          </p>

          <p>
            With a background in programming and art, I approach development as both a technical challenge and a form of artistic expression. I'm especially interested in learning the
            balance between player agency and narrative structure, and I strive to make every interaction meaningful, whether you're fighting for your life or engaging in witty banter.
          </p>

          <p>
            This site showcases my ongoing work, personal projects, and experiments.
          </p>

          <h1>Favourite Projects</h1>
          <div className='cardContainer'>
            <Tile game={getNDSGameFromID('link-cast')} type="3ds"/>
            <Tile game={getUnityGameFromID('last-high')} type="unity"/>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}
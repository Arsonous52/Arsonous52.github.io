import { useNavigate } from 'react-router-dom'
import Button from './button'

export default function Tile({game, type}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${type}/${id}`);
  }

  if (!game) return(
    <Button>No Game Specified</Button>
  )

  return (
    <Button className="tile" onClick={() => handleClick(game.id)}>
      <img src={game.thumbnail}/>
      <p>{game.title}</p>
    </Button>
  );
}
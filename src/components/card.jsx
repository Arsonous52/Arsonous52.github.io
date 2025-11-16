import { useNavigate } from 'react-router'
import Button from './button'

export default function Card({game}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${id}`);
  }

  return (
    <Button className="card" onClick={() => handleClick(game.id)}>
      <img src={game.thumbnail} style={{width:"100%"}}/>
      <p>{game.title}</p>
    </Button>
    );
}
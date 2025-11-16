import { useNavigate } from 'react-router-dom'
import Button from './button'

export default function ListCard({project}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${id}`);
  }

  return (
    <Button className="listCard" onClick={() => handleClick(project.id)}>
      <img src={project.thumbnail} style={{height:"100%", float:"left"}}/>
      <p>{project.title}</p>
    </Button>
    );
}
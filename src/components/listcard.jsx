import { useNavigate } from 'react-router'
import Button from './button'

export default function ListCard({project}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${id}`);
  }

  return (
    <Button className="listCard" onClick={() => handleClick(project.id)}>
      <img src={project.thumbnail} style={{height:"100%", float:"left"}}/>
      <h4>{project.title}</h4>
      <p>{project.tagline}</p>
    </Button>
    );
}
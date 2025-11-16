import { useNavigate } from 'react-router-dom'
import Button from './button'

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/about")}>About</Button>
      <Button onClick={() => navigate("/unity")}>Unity Games</Button>
      <Button onClick={() => navigate("/3ds")}>3DS Games</Button>
      <Button onClick={() => navigate("/other")}>Other Projects</Button>
    </div>
  );
}
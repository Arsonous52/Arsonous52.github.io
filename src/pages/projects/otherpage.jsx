import { useParams, useNavigate } from 'react-router';

import Button from '../../components/button';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {Direct, Github} from '../../components/download';
import Carousel from '../../components/carousel';

import projects from '../../data/otherprojects'

export default function() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return(
    <>
      <Header/>
      <div id='content'>
        <div className='container'>
          <Button onClick={() => navigate(-1)}>←Back</Button>
          <h1>Project "{id}" not found.</h1>
        </div>
      </div>
      <Footer/>
    </>
  )
  
  let github = <Github project={project}/>;
  let direct = <Direct project={project}/>;
  return(
    <>
      <Header/>
      <div id='content'>
        <div className='container'>

          <Button onClick={() => navigate(-1)}>←Back</Button>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div>
            {github}
            {direct}
          </div>

          <Carousel images={project.screenshots}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
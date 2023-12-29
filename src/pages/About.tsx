import { useNavigate } from 'react-router-dom'

const About = () => {
  console.log('********* About *********');
  const naviagte = useNavigate();

  return (
    <>
      <div>
        <h1>About Page</h1>
        <button onClick={()=> naviagte('/contact')}>Contact</button>
      </div>
    </>
  );
}

export default About;
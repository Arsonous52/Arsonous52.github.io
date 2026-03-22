import Header from '../components/header';
import Footer from '../components/footer';

export default function() {
  return(
    <>
      <Header/>
      <div id='content' style={{alignContent:'center'}}>
        <h1 style={{textAlign:'center'}}>Error 404: Page not found!</h1>
      </div>
      <Footer/>
    </>
  )
}
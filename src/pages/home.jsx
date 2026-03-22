import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return(
    <>
      <Header/>
      <div id='content' style={{alignContent:'center'}}>
        <h1 style={{textAlign:'center', animation: 'fadeIn ease-out 1s forwards'}}>Hi, I'm Alexander, Welcome to my portfolio!</h1>
      </div>
      <Footer/>
    </>
  )
}
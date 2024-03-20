import Left_side from "./components/Left_side";
import Right_side from "./components/Right_side";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#8953ab] to-[#c496d8] min-h-screen flex flex-col justify-center items-center p-6 font-inter font-lato font-SegoeUI font-sans">
      
      <section className="bg-[white] flex min-h-[680px] max-w-[980px] w-full rounded-[24px] [box-shadow:0_0_14px_rgba(0,_0,_0,_0.2)] overflow-hidden mt-[50px]">

        <Left_side/>
        <Right_side/>

      </section>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;

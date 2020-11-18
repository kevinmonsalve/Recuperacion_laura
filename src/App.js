import React from "react";
import "./styles.css";
import logo from "../src/Imagenes/PepsiLogo.jpg";
import Producto1 from "../src/Imagenes/Producto1.jpg";
import Prodcto2 from "../src/Imagenes/Prodcto2.jpg";
import Prodcto3 from "../src/Imagenes/Producto3.jpg";

import ReactPlayer from 'react-player';



function App() {
  return (
    <div className="App">

     <div className="colorH">
      <header id="Header">
       <div className="logo">
       <img id="header-img" className="logo" src={logo} />
      </div>
      
     <nav id="nav-bar" class="nav-link"> 
       <ul>
        <a className="des" href="http://www.pepsico.com.co">Inicio</a>
        <a className="des" href="http://www.pepsico.com.co/quienes-somos">Quiénes somos</a>
        <a className="des" href="http://www.pepsico.com.co/marcas-amadas">Marcas Amadas</a>
       </ul>
        </nav>
      </header>
      </div>
    <div className="Video">
     <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=Iw3ypSQCPWs'
          className='react-player'
          playing
          width='300px'
          height='300px'
        />
      </div> 
    </div>
    
    {/* PRODUCTO */}

    <div className="Producto"> 

      <div className="producto1">
       <h2 className="Titulo"> Doritos </h2>
       <h4 className="Precio"> $1.500 </h4>
       <h className="Description"> ​ 
       es una marca de tortilla
       chip con sabor producidos 
       desde 1964 por la empresa 
       de alimentos estadounidense 
       Frito-Lay  </h>

       <div className="ProDori1">
       <img  className="ProDori" src={Producto1}/>
      </div>
      </div>
      
      <div className="producto1">
       <h2 className="Titulo"> 7 UP </h2>
       <h4 className="Precio"> $3.000 </h4>
       <h className="Description"> ​ 
        es una marca de bebida gaseosa de lima-limón 
        vendida en tiendas, restaurantes y máquinas 
        expendedoras en muchos países del mundo</h>

       <div className="ProDori1">
       <img  className="ProDori" src={Prodcto2}/>
      </div>
      </div>

      <div className="producto1">
       <h2 className="Titulo"> Cheetos </h2>
       <h4 className="Precio"> $3.000 </h4>
       <h className="Description"> ​ 
         es una marca de aperitivos de harina de maíz con sabor a
        queso propiedad de Frito-Lay, subsidiaria de PepsiCo.</h>

       <div className="ProDori1">
       <img  className="ProDori" src={Prodcto3}/>
      </div>
      </div> 
    </div>

    <footer className="FranjaKe">
     
      <div className="redSocial">
        <a className="FO" href="https://www.youtube.com/user/Pepsi">
          YouTube
        </a>
        <a className="FO" href="https://www.instagram.com/pepsicolombia/?hl=es-la">
          Instagram
        </a>
        <a className="FO" href="https://twitter.com/pepsi">
          Twitter
        </a>
        <a className="FO" href="https://es-la.facebook.com/PepsiCoColombia">
        Facebook
        </a>
       </div>
       <div className="">
       <img className="logo" src={logo} />
     </div>
     
      <p className="inicioPP2"> 018000911053  pqrpepsico@bigfish.com.co</p>
      <p className="inicioPP3">Copyright© ©2020</p>
    
     
    </footer>


    </div>

  );
}
export default App;

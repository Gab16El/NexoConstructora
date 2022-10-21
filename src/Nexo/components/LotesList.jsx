import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LotesGrid } from "../../components/LotesGrid";

export const LotesList = () => {
  return (
    <div className='gridd eliminarpadding'>

        <div className='logito divs'>
            <img src="src\assets\img\logohorizontal.png"/>
            <h3 className='h3log'>No te quedes sin tu lote</h3>
            <div className='row mt-5 divs'>
              Somos una empresa de diseño, ingenieria, construcción, supervisión y gerencia de proyectos:
              con amplia experiencia en bienes raíces, venta y alquiler de propiedades y proyectos. 
              En nuestra aplicacion tendras acceso a nuestros mas recientes proyectos, flyers, promociones y descuentos
              en lotes de terreno.
              <br />
              <br />
              Vamos a desarrollar un nuevo concepto de lotización, que incluye 46 lotes de 45x50 y 6 de 25x45
              en una ubicación privilegiada, precios muy accesibles y todas las amenidades necesarias hacer una villa de ensueño.

              <div className='gridd2'>

                <div>
                <img src="src\assets\img\flyer1.jpg"/>
                </div>

                <div>
                <img src="src\assets\img\flyer2.jpg"/>
                </div>

              </div>


            </div>

            <div className='row mt-5 redes'>
                  <p>Encuentranos en nuestras Redes:</p>
              <div className="botones">
                  <button className='btn '>
                  <FaWhatsapp />
                  <p>Whatsapp</p>
                  </button>
                  
                  
                  <button className='btn'>
                  <FaFacebook/>
                    <p>Facebook</p>
                  </button>

                  <button className='btn'>
                  <FaInstagram />
                  <p>Instagram</p>
                  </button>
              </div>
            </div>

        </div>

        <div className='flyer divs'>
          <LotesGrid />
        </div>

  </div>
  )
}

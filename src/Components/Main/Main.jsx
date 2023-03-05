import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineClipboard, HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc: img ,
    destTitle: 'Gateway of india',
    location: 'Mumbai',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai (Bombay), India. '
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Great Wall of China',
    location: 'China',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). '
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Chichén Itzá',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built '
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Petra',
    location: 'Jorden',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth'
  },
  {
    
    id:5,
    imgSrc: img5,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule.'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Taj Mahal',
    location: 'Agra',
    grade: 'CULTURAL RELAX',
    fees: '$100',
    description: 'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal'
  },
]



const Main = () => {

    //lets create a react hook to add a scroll animation.. 
    useEffect(()=>{
      Aos.init({duration: 3000})
    }, [])
  return (
    
    <section className='main container section'>
           <div className="secTitle">
             <h3 data-aos="fade-right" className="title">
              Most visited destinations
             </h3>
           </div>

           <div className='secContent grid'>

            {
              Data.map(({id,imgSrc,destTitle,location,grade,fees,description })=>{
                  return(
                    <div data-aos="fade-up" key={id} className="singleDestination">

                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>

                      <div className="cardInfo">
                        <h4 className="destTItle">
                          {destTitle}
                        </h4>
                        <span className="continent flex">
                           <HiOutlineLocationMarker className='icon' />
                           <span className="name">{location}</span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className="price">
                            <h5>{fees}</h5>
                          </div>
                        </div>
                         <div className="desc">
                          <p>{description}</p>
                         </div>

                         <button className='btn flex'>
                            DETAILS <HiOutlineClipboardCheck className='icon'/>
                         </button>

                      </div>
                          
                    </div>
                  )

              })
              
            }
             
           </div>

    </section>
  )
}

export default Main

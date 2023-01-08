import React from 'react'
import { Link } from 'react-router-dom'
import './media.css'
import { BsArrowLeft } from 'react-icons/bs'
const data = [
  {
    id: 1,
    img: 'http://drive.google.com/uc?export=view&id=169k9HhDFlMGAqlB-W8_g5KyxgDlRBPz5',
    name: 'Zainab'
  },
  {
    id: 2,
    img: 'http://drive.google.com/uc?export=view&id=1XFvoT5h_QiNG8JB-nQfSssuGHre_fkLy',
    name: 'Zainab with Osariemen'
  },
  {
    id: 3,
    img: 'http://drive.google.com/uc?export=view&id=1_529ptLAOLlFPQLKOSR6oVwMSG8jCyIN',
    name: 'Zainab with Friends'
  },
  {
    id: 4,
    img: 'http://drive.google.com/uc?export=view&id=1-cU8nQ40d509txtDsp-X-tGuVKDXjzGp',
    name: 'Zainab with Friends'
  },
  {
    id: 5,
    img: 'http://drive.google.com/uc?export=view&id=1vYLbeD_VSBVerGfzKuHrfK2TinPQdM2c',
    name: 'Zainab with Abiodun'
  },
  {
    id: 6,
    img: 'http://drive.google.com/uc?export=view&id=1PbiSAcFLzRGFoJPpQ2PKICyb-CdqLTVO',
    name: 'Zainab with Ayobami'
  },
  {
    id: 7,
    img: 'http://drive.google.com/uc?export=view&id=1qWDSjM8rOF4c5H7uRk4HdsmUcQqWRUzk',
    name: 'Zainab with Anetor'
  },
  {
    id: 8,
    img: 'http://drive.google.com/uc?export=view&id=1zcsOiAYoVnVbPvN97WzkO644LqI5fCNQ',
    name: 'Zainab with Friends'
  },
  {
    id: 9,
    img: 'http://drive.google.com/uc?export=view&id=1wRBePyN9uQn5G_cO-bAk6XjuATb7cB38',
    name: 'Zainab with Friends'
  },
  {
    id: 10,
    img: 'http://drive.google.com/uc?export=view&id=1xDHwkMY_x3EpOdCcSIBo1Mx8grTjUmrK',
    name: 'Zainab with Peace'
  }
]

const Pictures = () => {
    return (
        <section className='media_section'>
            <h2>Picture Memories with Zainab </h2>
            <div className="container media_container">
            {
            data.map(({img, name}, index)=> {
                return (
                <article key={index} className="media">
                    <div className="zainab_medias">
                    <img src={img} alt='img One' />
                    </div>
                    <div>
                    <h3 className="name_ft_zainab">{name}</h3>
                    </div>

                </article>  
                )
            })
        }
        </div>
        <div className='media_link'>
            <BsArrowLeft/>
            <Link to="/">Back Home</Link>
        </div>
        </section>
    )
}

export default Pictures
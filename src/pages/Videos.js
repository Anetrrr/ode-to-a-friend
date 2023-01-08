import React from 'react'
import { Link } from 'react-router-dom'
import './media.css'
import { BsArrowLeft } from 'react-icons/bs'
const data = [
  {
    id: 1,
    vid: "https://drive.google.com/file/d/18TsD37dPkx4eT6PL-oa4ugcZnu49rSxk/preview",
    name: 'Peace Ebiama'
  },
  {
    id: 2,
    vid: "https://drive.google.com/file/d/1GchxMDvK0TIt91KuSLYLU6NxjYFQDZD6/preview",
    name: 'Zainab Ibrahim'
  },
  {
    id: 3,
    vid: "https://drive.google.com/file/d/12ly9huW0rCDVhfADHsKJcwr3cbUH5iKx/preview",
    name: 'Jessica Azeke'
  },
  {
    id: 4,
    vid: "https://drive.google.com/file/d/1Kw1X_OLfb2Dl7AwSYYod3KE9Tdxn2zG4/preview",
    name: 'Kemi Brown'
  },
  {
    id: 5,
    vid: "https://drive.google.com/file/d/1odbSNa7Mht0TmIQybffWjonPlcAdPFso/preview",
    name: 'Ayodeji Ogunnaike'
  },
  {
    id: 6,
    vid: "https://drive.google.com/file/d/1uOe3EynWESZoJjPf1ca_0jFn9ReN36nK/preview",
    name: 'Abiodun Olonade'
  }
]
const Videos = () => {
    return (
        <section className='media_section'>
            <h2>Video Compilation For Zainab </h2>
            <div className="container media_container">
            {
            data.map(({vid, name}, index)=> {
                return (
                <article key={index} className="media">
                    <div className="zainab_medias">
                      <iframe src={vid} title={name} allow="autoplay"></iframe>
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

export default Videos
import React from 'react'
import './testimonials.css'

const data = [
  {
    id: 1,
    avatar: 'http://drive.google.com/uc?export=view&id=1u8xbFKUD-k9oGUfA5sRfe1c5PxxRUlEe',
    name: 'Daniel Mukaila',
    position: 'Business Analyst',
    review: 'Zainab for me was and still is a friend. We came in as a team, the only guy amongst two great minds. We shared experiences, ideas and also confronted problems together. Zainab is good at what she does, a perfectionist. A lot of people do not know Zainab has a playing side at work 🤓, I KNOW that. We sometimes have misunderstandings, but then we always find a way to move forward. God bless you Zainab, it was great knowing you. Greater heights I pray in Jesus NAME! My GEE!! 😎😇🤗'
  },
  {
    id: 2,
    avatar: 'http://drive.google.com/uc?export=view&id=1iOP6ZKHNUkujUQXq7B7L-9Dq-vQKCDI1',
    name: 'Efe Utedjor',
    position: 'Business Development Coordinator',
    review: 'Zainab It was so great working with you, and you will be greatly missed. Your contributions to the Energy Team have been immense and tremendous. You have made some fantastic changes here, and I know you will thrive in your new role. Thanks for the timely quotations. Hope you keep doing your good work in your next job as well. It was a pleasure working with you. Goodbye, my friend!'
  },
  {
    id: 3,
    avatar: 'http://drive.google.com/uc?export=view&id=1vYLbeD_VSBVerGfzKuHrfK2TinPQdM2c',
    name: 'Abiodun Olonade',
    position: 'IT/Procurement Analyst',
    review: 'As someone who has worked under Zainab, she is conscientious and takes her responsibility seriously, always willing to put in extra hours or go the extra mile to get things done making her very productive, efficient and undeniably the best. I am grateful for the lessons taught, being patient and being an amazing supervisor to work with. I wish her luck out there. Thank you Zainab.'
  },  
  {
    id: 4,
    avatar: 'http://drive.google.com/uc?export=view&id=1PbiSAcFLzRGFoJPpQ2PKICyb-CdqLTVO',
    name: 'Ayobami Alabi',
    position: 'Procurement Analyst/Logistics',
    review: 'Over this short period I have known you, you have been a very great person to me. You impacted me so much. Sometimes I wondered how I would have survived without your help when Daniel went on leave lol. Thank you for everything. Thank you for being warm and always pushing us to be a better analyst. I am really going to miss you alot. I wish you the very best and Gods favour on your new journey.'
  },  
  {
    id: 5,
    avatar: 'http://drive.google.com/uc?export=view&id=1iOP6ZKHNUkujUQXq7B7L-9Dq-vQKCDI1',
    name: 'Happiness Udufo',
    position: 'Business Development Associate',
    review: 'It was just about three weeks into my Noemdek journey so I was still very new, but she did something that created a lasting impression, a positive one. One day I came to work using public transportation and my worry was how I would get back home considering the difficulty in getting a vehicle in the area, Zainab arranged a means of transportation without me asking. She saw my need and probably my worry and gave a helping hand, allaying my fears, from that day my respect for her increased. What that tells me is that she cares about those around her and is perceptive. It is just unfortunate that we are only able to have such a short time working together.'
  }  
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Personal experiences with Zainab </h2>
      <div className="container testimonials_container">
        {
          data.map(({avatar, name, review, position}, index)=> {
            return (
              <article key={index} className="testimonial">
                <div className="colleagues_avatar">
                  <img src={avatar} alt='Avatar One' />
                </div>
                <div>
                  <h5 className="colleagues_name">{name}</h5>
                  <small className='colleagues_position'>{position}</small>
                  <small className="colleagues_review">
                    {review}
                  </small>
                </div>
              </article>  
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials



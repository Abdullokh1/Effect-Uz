import React, { useEffect, useState } from 'react'
import './InfoCards.scss'
import infoCard from '../../../assets/images/info-card.png'
import crosshair from '../../../assets/images/crosshair.svg'
import clock from '../../../assets/images/clock.svg'
import calendar from '../../../assets/images/calendar.svg'
import cardImg from '../../../assets/images/card-img.svg'
import API from '../../../API/API'
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom'



function InfoCards() {
  const [newsEnd, setNewsEnd] = useState([])
  let [loading, setLoading] = useState(false)
  const placeholder = ['','','','']

  const params = {
    count: 4
  }

  const useNewsEnd = async () =>{
    try{
      setLoading(false)
      const newsEnd = await API.newsEnd(params)
      setLoading(true)
      setNewsEnd(newsEnd.data.items.slice(0,4))

    }catch(err){
      console.error(err);
      return;
    }
  }

  useEffect(() =>{
    useNewsEnd()
  },[])


  return (
    <div className='info-card d-flex'>
      <div className='info-card__left'>
        <div className='info-card__img-box'>
          <img className='info-card__img mb-3' src={infoCard} alt="infocard" />
        </div>
        <div className='d-flex align-items-center mb-3'>
          <img src={crosshair} alt="crosshair"/>
          <h5>Texnologiya</h5>
          <img src={clock} alt="clock"/>
          <span>Bugun . 15:45</span>
        </div>
          <h4>Samsung Galaxy F22 launched in India: Price, features, other details</h4>
          <p>Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment.</p>
      </div>

      <div className='info-card__right'>
        <ul className='info-card__list'>
          {!loading ? 
          placeholder.map((_, i) =>{
            return (
            <Card key={i} style={{ width: '100%', marginBottom: '20px'}}>
              <Card.Body className='card-placeholder'>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={8} /> <Placeholder  />{' '}
                </Placeholder>
              </Card.Body>
            </Card>
            )
          })
          : 
          newsEnd.map(item => {
            return (
              <Link to={`/AboutNews/${item.id}`} key={item.id}>
                <li>
                  <div>
                      <img src={calendar} alt="calendar" />
                      <span>11:45 |</span>
                      <span>{item.created_date}</span>
                      <h5>{item.title_uz.substring(0,50)}...</h5>
                  </div>
                  <img src={cardImg} alt="card-img" />
                </li>
              </Link>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default InfoCards
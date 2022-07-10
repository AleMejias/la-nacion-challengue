import moment from 'moment';
import 'moment/locale/es'
import React from 'react'
import { ArticleItem } from '../../../interfaces/ArticleApiResponse.interface';

export const ArticleItems = ({ headlines , promo_items ,display_date} : ArticleItem)  => {

  moment.locale('es');
  const currentMonth = `${moment(display_date).format('MMMM')}`
  const dateFormated = `${ moment(display_date).format('D') } de ${currentMonth[0].toUpperCase() + currentMonth.slice(1)} de ${moment(display_date).format('YYYY')}  `
  return (
    <article className='card px-0 articles__card'>
      <img src={ promo_items.basic.url } alt={headlines.basic} />
      <div className='card-body'>
        <p className='card-text'>
          <b>{ headlines.basic }.</b> Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <h4>{ dateFormated }</h4>
      </div>
    </article>
  );
}

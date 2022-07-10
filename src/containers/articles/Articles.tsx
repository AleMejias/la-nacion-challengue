import React , { useContext } from 'react';
import ArticlesContext from '../../context/GlobalState';
import { Tags } from './components/Tags';

import { Tag  } from '../../interfaces/ArticleApiResponse.interface';
import { ArticleItems } from './components/ArticleItem';

export const Articles = () => {

  const { articles , tags }  = useContext( ArticlesContext );
  
  return (
    
    <div className='col-md-9 articles'>

      <div className='articles__tagsContainer'>
        <div className='articles__tagsContainer--title'>
          <h1>Acumulado Grilla</h1>
        </div>
        <div className='articles__tagsContainer--tags mb-3'>
          {
            
            tags?.map((element: Tag) => <Tags key={ element.slug } slug={ element.slug} text={ element.text }/>)
          }
        </div>
      </div>

      <div className='row mx-0 articles__row'>

        {
          articles.map((article) => <ArticleItems  key={article._id} { ...article }/>)

          /* display_date={ article.display_date } alt={ article.headlines.basic } src={ article.promo_items.basic.url } */
        }

      </div>
    </div>
  )
}

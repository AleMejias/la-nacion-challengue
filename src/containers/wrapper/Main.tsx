import React, { useContext }  from 'react';
import { Articles } from '../articles/Articles';
import { BannerRight } from '../banner-right/BannerRight';
import ArticlesContext from '../../context/GlobalState';
import { Spinner } from '../spinner/Spinner';

export const Main = () => {

  const { loading } = useContext( ArticlesContext );
  return (
    <section className="container-fluid mainContainer mt-4">

      <div className="row">

        {  
        
          loading ?  
          <Spinner />
          :
          <>
            <Articles />
            <BannerRight />          
          </>

        }
      </div>

    </section>
  )
}

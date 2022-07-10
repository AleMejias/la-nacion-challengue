/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Tag } from '../../../interfaces/ArticleApiResponse.interface';

export const Tags = ({ slug , text } : Tag) => {
  return (
    <>
      <a 
        href={`https://especiales.lanacion.com.ar/${ text }/${ slug }`} 
        onClick={(e) => e.preventDefault()}>

        { text }

      </a>
    </>
  )
}

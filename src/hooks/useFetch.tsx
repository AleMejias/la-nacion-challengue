/* eslint-disable no-sequences */
import { useEffect, useState } from 'react'
import { getArticles } from '../helpers/getArticles';
import { handleTagArray } from '../helpers/handleTagArray';
import { ArticleResponseAPI } from '../interfaces/ArticleApiResponse.interface';


export const useFetch = () => {
    const [ articles , setArticles ] = useState<ArticleResponseAPI>({
        articles: [],
        tags: [],
        loading: true
    });

    useEffect(() => {

        getArticles()
            .then(( articles ) => {

                if( !articles ) {
                    throw Error('Ha ocurrido un error al intentar recuperar los datos');
                }
                const subTypeArticles = articles.filter((tag) => tag.subtype === '7')
                let [ tags ]  = handleTagArray( subTypeArticles );
                setArticles( {
                    articles: subTypeArticles,
                    tags: tags,
                    loading: false
                });
            })
            .catch(( error ) => {
                console.log( error );
            })

    },[]);

    return articles;
}

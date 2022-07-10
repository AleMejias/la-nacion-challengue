import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ArticleResponseAPI } from '../interfaces/ArticleApiResponse.interface';

const ArticlesContext = createContext({} as ArticleResponseAPI);

const GlobalStateProvider = ({ children }:any) => {
    const  articles = useFetch() || {};
    
    return(
        <ArticlesContext.Provider value={ articles }>
            { children }
        </ArticlesContext.Provider>
    )
}
export { GlobalStateProvider };
export default ArticlesContext;
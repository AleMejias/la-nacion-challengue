import { ArticleResponseAPI } from '../interfaces/ArticleApiResponse.interface';

export const getArticles = async () => {

    const url = 'https://api-test-ln.herokuapp.com/articles';
    const request = await fetch( url );

    const { articles }: ArticleResponseAPI = await request.json();

    return articles;

}

import { ArticleItem, Tag } from '../interfaces/ArticleApiResponse.interface';
export const handleTagArray = ( articles: ArticleItem[] ) => {

    let tagsIdArr: Tag[] = [];

    // Primero recorro cada articulo
    articles.forEach((e) => {

        // Extraigo las tags de ese articulo para recorrerla
        const { tags } = e.taxonomy;
        tags.forEach((currentTag) => {

            // Pregunto si en mi array de Ids existe este tags para agregarlo, si existe significa que debo aumentar su count en + 1
            const exists = tagsIdArr.some((e) => e.slug === currentTag.slug )
            if( !exists ) {
                tagsIdArr.push({ slug: currentTag.slug,
                    text:currentTag.text, count: 1
                });
            } else  {

                tagsIdArr.map((e) => e.slug === currentTag.slug && e.count ? e.count +=1 : "");
            }
        })

    })
    // Ordeno el array de mayor a menor
    tagsIdArr.sort((a, b) => {

        if( a.count && b.count && a.text && b.text) {
            if(a.count > b.count ) {
              return -1;
            }
        }

        return 1;
      });
    
    // Me quedo con las primeras 10 ocurrencias
    const arraySorted = tagsIdArr.slice( 0 , 10 );
    return [ arraySorted ];
}
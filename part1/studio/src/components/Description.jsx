import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = 'https://www.facebook.com/Mrs.Cookercurry/';
    let authorPhoto = 'https://www.facebook.com/photo/?fbid=525292409657152&set=a.415532637299797' ;
    let authorName = 'Mrs.Cooker Curry';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {

    render() {
       return (
          <div> 
             <div>
                <h1>Fancy Pasta</h1>
                <p>This recipe is full  of yummy farm-fresh ingredients. So simple you could make it for any weeknight</p>
             </div>
             <RecipeAuthor />
          </div>
       );
    }
 }
 export default RecipeDescription;
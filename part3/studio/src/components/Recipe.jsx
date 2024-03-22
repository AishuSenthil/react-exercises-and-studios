const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/how-to-make-homemade-glazed-doughnuts/";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg";
   let authorName = "Sally McKenny";
 
   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "80%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
 }
 
 const RecipeIngredients = () => {
   const ingredients = ["Milk", "Yeast", "Sugar", "Eggs", "Butter"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
 }
 
 const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>How to Make Homemade Glazed Doughnuts</h1>
            <p>Making homemade glazed doughnuts is easier than you think, but requires a little patience. Ready in about 2.5 hours, these taste like doughnuts from your favorite bakery, but they’re made in the comfort of your own home. For doughnut success, follow my step-by-step photos, helpful success tips, and video tutorial. Using this same doughnut dough, you can create other flavored frosted doughnuts too!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
 }
 
 const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2016/05/glazed-doughnuts-homemade-2.jpg" alt="Homemade Donuts" className="imageUpdates"/>
   );
 }
 
 export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
 }
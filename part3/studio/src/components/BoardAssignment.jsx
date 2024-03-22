import React, { useState } from 'react';

export default function BoardAssignment() {
   // Define three boards
   const boards = [
      { label: 'Healthy Recipes', value: 'healthy' },
      { label: 'Quick Meals', value: 'quick' },
      { label: 'Desserts', value: 'desserts' }
   ];

   // State for selected board
   const [boardName, setBoardName] = useState('no boards yet!');

   // Handle change function for dropdown
   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map(board => (
               <option key={board.value} value={board.value}>{board.label}</option>
            ))}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}

import React from 'react'
import Score from './Score';

function Student(props) {

    return (
        <>
         <form>
           <table>
             <tr>
               <th>Name</th>
               <th>Bio</th>
               <th>Scores</th>
             </tr>
             {props.students.map((item) => (
               <>
                 <tr>
                   <th><input type="text" value={item.name} /></th>
                   <th><input type="text" value={item.bio}  /></th><br></br>
                   <Score score={item.scores}/>
                 </tr>
               </>
             ))}
           </table>
         </form>
       </>
       )
  }

export default Student;
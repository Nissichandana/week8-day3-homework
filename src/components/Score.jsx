import React from 'react'


function Score(props) {
    return (
        <>
             {props.score.map((item) => (
               <>
                 <tr>
                   <th><input type="text" value={item.date} /></th>
                   <th><input type="text" value={item.score}  /></th>
                 </tr>
               </>
             ))}
       </>
       )
}

export default Score;
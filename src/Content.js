// import { memo } from "react";

// function Content({ onIncrease }){
//     console.log('re-render');

//     return(
//         <>
//         <h2>Hello anh em f8</h2>
//         <button onClick={onIncrease}>Click me!</button>
//         </>
//     )
// }
// export default memo(Content)


// 41

import Paragraph from './Paragraph'
function Content(){
    return(
        <div>
            <Paragraph />
        </div>
    )
}
export default Content
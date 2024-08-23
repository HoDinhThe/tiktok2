//import { useRef, useState, useEffect, useCallback, useMemo, useReducer, act } from "react"
//import Content from './Content'
//40
//import TodoApp from './Todo'

// UseRef
// Lưu các giá trị qua 1 tham chiếu bên ngoài
// function component

// 34. useRef() hook | Cách sử dụng useRef() hook
// function App(){
//   const [count, setCount] = useState(60)

//   const timerId = useRef()
//   const prevCount = useRef()
//   const h1Ref = useRef()
//   useEffect(() => {
//     prevCount.current = count
//   }, [count])

//   useEffect(() => {
//     const rect = h1Ref.current.getBoundingClientReact()

//     console.log(rect);
//   })

//   const handleStart = () => {
//       timerId.current = setInterval(() => {
//         setCount(prevCount => prevCount - 1)
//       }, 1000)
//       console.log('Start -> ', timerId.current)
//   }
//   const handleStop = () => {
//       clearInterval(timerId.current)

//         console.log('Stop -> ', timerId.current);
//   }

//   console.log(count, prevCount.current);
//   return (
//     <div style={{ padding: 20 }}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }



// 36 useCallback() hook | Tránh tạo ra hàm mới không cần thiết với useCallback()
// 1. memo() -> Higher Order Componnent (HOC)
//2. useCallback()
// - Reference types : kiểu dữ liệu tham chiếu
// - React memo()
// Hooks
// HOC
// Render props
// function App(){
//   const [count, setCount] = useState(0)
  
//   const handleIncrease = useCallback(() => {
//     setCount(prevCount => prevCount +1)
//   }, [])
//     return(
//       <div style={{ padding: '10px 32px'}}>
//         <Content onIncrease={handleIncrease}/>
//         <h1>{count}</h1>
//       </div>
//     )
// }



// 37.useMemo() hook | Tránh thực hiện lại 1 logic không cần thiết với useMemo()
// function App(){
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])

//   const nameRef = useRef()

//   const handleSubmit = () => {
//     setProducts([...products, {
//       name, 
//       price: +price
//     }])
//     setName('')
//     setPrice('')

//     nameRef.current.focus()
//   }

//   const total = useMemo(() => {
//     const result = products.reduce((result, prod) => {
//       console.log('Tinh toan lai...')
//        return result + prod.price
//     }, 0)
//       return result
//   }, [products]) 
//   // tinh tong tien

//   return(
//     <div style={{ padding: '10px 32px' }}>
//       <input
//       ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={e => setName(e.target.value)}
//       />
//       <br/>
//       <input
//         value={price}
//         placeholder="Enter price..."
//         onChange={e => setPrice(e.target.value)}
//       />
//       <br/>
//       <button onClick={handleSubmit}>Add</button>
//       <br/>
//       Total: {total}
//       <ul>
//         {products.map((products, index) => (
//           <li key={index}>{products.name} - {products.price}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }



//38. useReducer() hook | Khi nào sử dụng useReducer()

//useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

//useReducer
// 1. Init state : 0
// 2. Actions: up (state + 1) / Down (state - 1)
// 3. Reducer
//4. Dispatch


// // Init state
// const initState = 0
// //Actions
// const Up_Action = 'up'
// const Down_Action = 'down'
// //Redecer
// const reducer = ( state, action) => {
//   console.log('reducer running ...')
//   switch (action) {
//     case Up_Action:
//         return state + 1
//     case Down_Action:
//         return state - 1
//     default:
//       throw new Error('Invalid action')
//   }
// }
// function App(){
//   const [count, dispatch] = useReducer(reducer, initState)

//   return(
//     <div style={{ padding: '0 20px' }}>
//       <h1>{count}</h1>
//       <button
//         onClick={() => dispatch(Up_Action)}
//       >
//         Down
//       </button>
//       <button
//         onClick={() => dispatch(Down_Action)}
//       >
//         Up
//       </button>
//     </div>
//   )
// }

//40
// function App(){
//     return <TodoApp/>
// }


//41
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
// import Content from './Content'
// import './App.css'



// // Context
// // CompA => ComB => CompC

// // Theme:  Dark / Light

// // 1. Create context
// // 2. Provider : tk cung cap
// // 3. Consummer : tk nhan 

// function App( ){
//    const context = useContext(ThemeContext)
//     return ( 
//           <div style={{ padding: 20 }}>
//             <button onClick={context.toggleTheme}>Toggle theme</button>
//             <Content />
//         </div>
//          )
// }



// //42 Global State with Context + useReducer | Trạng thái toàn cục
// import { actions, useStore } from "./Store"
// function App(){

// const [state, dispatch] = useStore()
// const { todos, todoInput } = state

//     const handleAdd = () => {
//         dispatch(actions.addTodo(todoInput))
//     }

//     console.log(todos)

//     return(
//         <div>
//             <input
//                 value={todoInput}
//                 placeholder="Enter tode..."
//                 onChange={e => {
//                     dispatch(actions.setTodoInput(e.target.value))
//                 }}
//             />
//            <button onClick={handleAdd}>Add</button>
//            {todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//            ))}
//         </div>
//     )
// }


//43 useImperativeHandle() hook | React JS
import { useRef } from "react"
import Video from "./Video"
function App(){
    const videoRef = useRef()

   
    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }
    return (
        <div>
            <Video ref= {videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}
export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// let arr=[{
//   img:"https://th.bing.com/th/id/OIP.mQ5xcS_CWPpfqHq2JGr4pwAAAA?rs=1&pid=ImgDetMain",
//   heading:"MS Dhoni",
//   descrip:"Crickter",
// }]
const obj=[{
  img:"https://th.bing.com/th/id/OIP.mQ5xcS_CWPpfqHq2JGr4pwAAAA?rs=1&pid=ImgDetMain",
 heading:"MS Dhoni",
 descrip:"Cricketer,India",
},{
  img:"https://images.daznservices.com/di/library/GOAL/73/15/lionel-messi-barcelona-2020-21_rzdm4jsg4bq11f6auy6tszszj.jpg?t=10785638&quality=100",
  heading:"Lionel Messi",
  descrip:"Footballer,Argentina"
},
{
  img:"https://th.bing.com/th/id/OIP.l8c1v0k2VJLkuZKpwpXc7gHaLH?rs=1&pid=ImgDetMain",
  heading:"Thomas Muller",
  descrip:"Footballer,Germany"
},
{
  img:"https://th.bing.com/th/id/OIP.QfmmkKNzi_52SHs6LsiqPQHaFj?w=600&h=450&rs=1&pid=ImgDetMain",
  heading:"Shane Watson",
  descrip:"Cricketer,Australia"  
},{
  img:"https://th.bing.com/th/id/OIP.VhmXv97CASUkc-ywiSK7cAHaHa?rs=1&pid=ImgDetMain",
  heading:"Julian Alvarez",
  descrip:"Footballer,Argentina"
},{
  img:"https://th.bing.com/th/id/OIP.PANQWqvljyDEmbju2WNf3QAAAA?rs=1&pid=ImgDetMain",
  heading:"Virat Kohli",
  descrip:"Cricketer,India"
},{
  img:"https://th.bing.com/th/id/OIP.6Rrif6ws0ijgI33Qc37xrgHaFj?rs=1&pid=ImgDetMain",
  heading:"Kane Williamson",
  descrip:"Cricketer,New Zealand"
},
{
  img:"https://th.bing.com/th/id/OIP.XBh7GOX3SPDI1qpIsBPGgwHaEK?rs=1&pid=ImgDetMain",
  heading:"Sourav Ganguly",
  descrip:"Cricketer,India"
},
{
  img:"https://i.pinimg.com/originals/78/34/c0/7834c0a7dc814d3699f8b0f6cbc372e9.jpg",
  heading:"Cristiano Ronaldo",
  descrip:"Footballer,Portugal"
}];
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App details={obj[0]}/>
    <App details={obj[1]}/>
    <App details={obj[2]}/>
    <App details={obj[3]}/>
    <App details={obj[4]}/>
    <App details={obj[5]}/>
    <App details={obj[6]}/>
    <App details={obj[7]}/>
    <App details={obj[8]}/>
    
  </React.StrictMode>,
)

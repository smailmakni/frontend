import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Listarticles = () => {
    const [articles,setArticles]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/articles")
        .then(res=>setArticles(res.data))
        .catch(err=>console.log(err))
    }, [])
  return (
    <div>
        <center>
        <table border={1}>
      {articles.map((art,index)=>
      <tr>
        <td><img src={art.imageart} height={100} width={100}></img></td>
        <td>{art.reference}</td>
        <td>{art.designation}</td>
        <td>{art.prix}</td>
        <td>{art.marque}</td>
        <td>{art.qtestock}</td>
        
        
        </tr>)}
        </table>
        </center>
    </div>
  )
}

export default Listarticles

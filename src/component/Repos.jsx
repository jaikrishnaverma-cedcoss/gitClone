import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Repos = ({state}) => {
    
  const [datas,setDatas]=useState([])
  console.log(datas)
    useEffect(()=>{
let data=axios.get(state.repos_url).then(res=>setDatas([...res.data.reverse()]))
console.log(data)
    },[])

    if(datas.length==0)
    return   <div className="col full line brd p2 flexAIC"><img src="1488.gif" width="120px" alt="" /></div>
      else    
  return (
   <>
    <div className="col full line brd p2">
              {
               datas.map(x => <a className='full col linetop m1 p1 hm0 hp0' href={`http://${x.git_url.slice(6)}`}>
                  <div className="row flexSB">
                    <h3 style={{ color: "#0969da" }} className='p1 hp0'>{x.name}</h3>
                    <div className="line brd row flexAIC flexSB p1 w10">
                      <i class="fa fa-star-o" aria-hidden="true"></i>
                      <p >Star</p>
                      <div className="lineright" style={{ height: "100%" }}></div>

                      <i class="fa fa-caret-down " aria-hidden="true"></i>
                    </div>
                 
                  </div>
                  <div className="row full flexAIC langline m1 hm0">
                    <div className="square line"></div>
                      <p className='m1 vm0'>{x.language}</p>
                      <p className='m1 vm0'>Updated yesterday</p>
                    </div>
                </a>)
              }
            </div>
   </>
  )
}

export default Repos
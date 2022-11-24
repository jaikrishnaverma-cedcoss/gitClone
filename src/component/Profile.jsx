import React, { useEffect, useState } from 'react'
// import datas from './data'
import { useSelector, useDispatch } from 'react-redux'
import Overview from './Overview'
import Repos from './Repos'
import Projects from './Projects'
const Profile = (props) => {
  const state = useSelector(state => state.gitSlice.data)
  const [page,setPage] =useState(0)

  return (
    <>
      <div className="nav full row flexAIC blackbg flexSB p2 vp1">

        <div className="row flexAIC flexSB w60">
          <i class="fa fa-github white logo" onClick={() => props.setToggle(prev => !prev)} aria-hidden="true" style={{ color: "white" }}></i>
          <input type="text" className='p1 ' />
          <p>Pull requests</p>
          <p>Issues</p>
          <p>Marketplace</p>
          <p>Explore</p>
        </div>

        <div className="row flexAIC w10 flexSB">
          <i class="fa fa-bell-o white" aria-hidden="true"></i>
          <i class="fa fa-plus-square-o white" aria-hidden="true"></i>
        </div>

      </div>


      <div className="full row" >

        <div className="w20 col  p2" style={{ minWidth: "270px" }}>
          <div className="full row flexJCC ">
            <img src={state.avatar_url} className='profileimg' alt="" />
          </div>
          <h2 className='m4 hm0'>{(state.name !== null) ? state.name : state.login}</h2>
          <p>{state.name}</p>
          <span className='spanbtn'>Building tech Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque in eligendi consequuntur?</span>
          <div className="row m1 full flexAIC m5 hm0">
            <button className="line brd p2 m1 hm0 " >Follow</button>
            <button className="line brd p2 m5 vm1"><i class="fa fa-heart-o fw" style={{color:"pink"}}  aria-hidden="true"></i>&nbsp;Sponsor</button>
            <i class="fa fa-ellipsis-h m5 vm1" aria-hidden="true"></i>
          </div>
          <div className="row m1 full flexAIC m1 hm0 spanbtn">
            <i class="fa fa-users" aria-hidden="true"></i>&nbsp;<span className='fw'>{state.followers}</span>&nbsp;
            followers.&nbsp;<span className='fw'>{state.following}</span>&nbsp;following
          </div>
          <div className="row m1 full flexAIC m1 hm0 spanbtn">
            <i class="fa fa-star" aria-hidden="true"></i>&nbsp;<span className='fw'>{state.public_repos}</span>
          </div>
          <div className="col full m5 hm0 spanbtn">
            <div className="row flexAIC m2 hm0"><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;New York,New York</div>
            <div className="row flexAIC m2 hm0"><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;githubAcedcoss.com</div>
            <div className="row flexAIC m2 hm0"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;https://fontawesome.com/n</div>
            <div className="row flexAIC m2 hm0"><i class="fa fa-twitter" aria-hidden="true"></i>&nbsp;githubAcedcoss.com</div>
          </div>
        </div>

        <div className="w80">

          <div className="nav full col flexJCC linebottom">
            <div className="row full" style={{ height: "20px" }}></div>
            <div className="w40 row flexAIC flexSB linebottomOrange" style={{ minWidth: "386px" }}>
              <p className={`p2 ${(page==0)?"activelink":""}`} onClick={()=>setPage(0)}><i class="fa fa-book" aria-hidden="true"></i>&nbsp;Overview</p>
              <p className={`row p2 ${(page==1)?"activelink":""}`} onClick={()=>setPage(1)}><i class="fa fa-television" aria-hidden="true"></i>&nbsp;Repositories <span className='brd10 spanno'>{state.public_repos}</span></p>
              <p className={`p2 ${(page==2)?"activelink":""}`} onClick={()=>setPage(2)}><i class="fa fa-television" aria-hidden="true"></i>&nbsp;Projects</p>
            </div>
          </div>

          <div className="full" style={{ padding: "2% 2% 0% 0%" }}>

          
{
  (page==0)?<Overview state={state}/>:(page==1)?<Repos state={state}/>:<Projects/>
}

          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
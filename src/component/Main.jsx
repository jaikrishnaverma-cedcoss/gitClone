import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, searchData } from '../features/slice'
import Profile from './Profile'
const Main = () => {
    const [toggle, setToggle] = useState(false)
    const state = useSelector(state => state.gitSlice.data)
    
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(fetchData())
    }, [])

    const Searched = (e) => {
        e.preventDefault()
        dispatch(searchData(e.target.user.value))
    }

    if (toggle)
        return (<>
            <Profile setToggle={setToggle} />
        </>)
    console.log(state.name)

    return (
        <div className='full col flexAIC blackbg' style={{ minHeight: "100vh", position: "relative" }}>
            <h2 className="m1" style={{ color: "white" }}>Get Github Profile Cards!</h2>
            <form action="" onSubmit={Searched} className="w50 m1 brd10 pbg row">
                <input className="row w75 pbg m1 p1 brd10 pbg" type="text" name='user' placeholder='Search a Github User' />
                <button type="submit" className='W20'></button>
            </form>

            {
                (state.login !== undefined) ? <div onClick={() => setToggle(prev => !prev)} className="m2 p1 row w50 flexAIC pbg brd10" style={{ height: "180px" }}>
                    <img src={state.avatar_url} height="100%" style={{ borderRadius: '50%' }} className='p2 w25' alt="" />
                    <div className="col flexSB p3 w75" style={{ height: "100%" }}>
                        <h3 className='m2 hm0'>{(state.name !== null) ? state.name : state.login}</h3>
                        <p>{state.bio}</p>
                        <div className="row full flexAIC flexSB m2 hm0">
                            <span>{state.followers}&nbsp;Followers</span>
                            <span>{state.following}&nbsp;Following</span>
                            <span>{state.public_repos}&nbsp;Repos</span>
                        </div>
                        <div className="row full flexAIC flexSB m2 hm0">
                            <button className="blackbg p1">Python Statistic</button>
                            <button className="blackbg p1">Whatsapp Analysis</button>
                            <button className="blackbg p1">Blog Posts</button>
                            <button className="blackbg p1">Cpp-Projects</button>
                            <button className="blackbg p1">Ml-Model</button>
                        </div>
                    </div>
                </div> : <div></div>
            }

            <div className="row full p1 flexJCC pbg" style={{ position: "absolute", bottom: "0" }}>
                <div className="w20 row flexAIC flexSB">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Main
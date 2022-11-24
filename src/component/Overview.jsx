import React from 'react'

const Overview = ({state}) => {
  return (
   <>
     <div className="col full line brd p2">
              <div className="row flexAIC">
                <i class="fa fa-smile-o" aria-hidden="true"></i>
                &nbsp;{(state.name !== null) ? state.name : state.login}/README.md
              </div>
              <h2 className="fw full linebottom p1 hp0 m1 hm0">Hi, I'm {(state.name !== null) ? state.name : state.login}</h2>

              <div className="brd row full  lpbg p2 m1 hm0">
                <div className="col w75">
                  <h2 className='m1 hm0'>{(state.name !== null) ? state.name : state.login}</h2>
                  <p className='m5  hm0 hp0' style={{ fontSize: "18px", color: "grey" }}>Software Engineer & Content Creator and <br></br> Community Organizer</p>
                </div>
                <img src="image-removebg-preview.png" alt="" style={{ width: "15%" }} />
              </div>

              <p className='m1 hm0' style={{ color: "#3f3f3f" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat rem dolor blanditiis corporis similique, itaque totam asperiores soluta fugit magnam labore ex qui possimus aut necessitatibus neque commodi tempore? Beatae iusto iure odio nostrum soluta numquam illum eos deleniti temporibus? Et, mollitia. Ea, ullam adipisci.</p>
              <h2 className="m1 hm0">
                Find me around the web&nbsp;<i class="fa fa-globe" aria-hidden="true"></i>
              </h2>

              <div className="col m2 " style={{ marginTop: ".1%" }}>
                <ul >
                  <li style={{ padding: ".5%" }}>Learning Lorem ipsum <a href="https://github.com/jaikrishnaverma-cedcoss?tab=repositories">dolor</a> sit.</li>
                  <li style={{ padding: ".5%" }}>Thinking <a href="https://github.com/jaikrishnaverma-cedcoss?tab=repositories">lorem</a> sum ipsum dolor sit.</li>
                  <li style={{ padding: ".5%" }}>Managing Lorem ipsum dolor <a href="https://github.com/jaikrishnaverma-cedcoss?tab=repositories">sit avegado</a>.</li>
                </ul>
              </div>
              
            </div>
   </>
  )
}

export default Overview
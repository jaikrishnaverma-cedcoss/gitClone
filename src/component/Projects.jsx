import React from 'react'

const Projects = () => {
  return (
<>
<div className="col full line brd p2">
           
              <div className="brd row full  lpbg p2 m1 hm0">
                <div className="col w75">
                  <h2 className='m1 hm0'>Welcome to the all-new projects</h2>
                  <p className='m5  hm0 hp0' style={{ fontSize: "14px", color: "grey",maxWidth:"600px",lineHeight:"2rem" }}>Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.</p>
                </div>
                <img src="image-removebg-preview.png" alt="" style={{ width: "15%" }} />
              </div>

              <div className="brd col full flexAIC line p2 m1 hm0">
              <i class="fa fa-tasks m1" aria-hidden="true"></i>
          <h2 className='m1'>Create your first GitHub project</h2>
          <p className='m1  hm0 hp0' style={{ fontSize: "14px", color: "grey"}}>Projects are a customizable, flexible tool for planning and tracking your work.</p>
             <button className='brd p1 m1' style={{background:"green",color:"white"}}>New Project</button>
              </div>
             
             <h2 className="m1 hm0">Find me around the web&nbsp;<i class="fa fa-globe" aria-hidden="true"></i>

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

export default Projects
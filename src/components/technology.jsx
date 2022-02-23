export const Technology = (props) => {
    return (
      <div id='technology' className='text-center'>
        <div class="container col-xxl-8 px-4 py-5">
            <div className='technology-title'>
            <h2>Technology</h2>
            </div>
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class=" technology-img col-10 col-sm-8 col-lg-6">
      <img src="./img/Techfull.png" className="img-responsive" alt="" />{" "}      
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3"> </h1>
        <div class="col-tech-list">
                 {/* <ul>
                    <li>Mobile and Web development </li> 
                    <li>UI/UX Design</li>
                    <li>Quality assurance </li>
                    <li>Full Stack  </li>
                  </ul>        */}
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Mobile and Web development</li>
                      <li class="list-group-item">UI/UX Design</li>
                      <li class="list-group-item">Quality assurance</li>
                      <li class="list-group-item">Full Stack</li>
                  </ul>
         </div>
      </div>
    </div>
    <div className='container'>
    <div className = 'technology-title'>
          <h2>Technology Stack</h2>
          </div>
        <img src="img/technology.png" className=" img-responsive" alt="" />{" "}   
        </div>
  </div>
  </div> 
    )
    }
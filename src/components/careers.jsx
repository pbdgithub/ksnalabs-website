import { Card, Col, Row } from "react-bootstrap"
import { ReactComponent as Calendar } from '../assets/Icon exports/Calendar.svg';
export const Careers = (props) => {
    return (
      <div id='careers' className='text-center'>
          <div class='career-cards'>
          <div className = 'container'>
          <div className='section-title'>
              <h2>Careers</h2>
          </div>

<div class="card-deck">
  <div class="card">
 
    <img class="card-img-top" src="./img/cardimg.png" alt="Card image cap"/>{" "}
    <div class="card-body">
      <h5 class="card-title">Full Stack Developer</h5>
      <p class="card-text">The ideal candidate will be responsible for the analysis, designing & development of various web/windows applications, Skills like ASP.Net,MVC,C#,</p>
      
                <a
                  href='#contact'
                  className='btn view-det-btn btn-lg page-scroll'
                >
                  View Details
                </a>{' '}
                {/* <button type='submit' className='apply-job-btn'>
                Apply Job
                </button> <br></br><br></br> */}
    </div>
    <div class="card-footer">
      <large class="text-muted">Bangalore, Karnataka | <Calendar/> 5 Days ago</large>
    </div>
  </div>
  <div class="card">
 
    <img class="card-img-top" src="./img/backend.png" alt="Card image cap"/>{" "}
    <div class="card-body">
      <h5 class="card-title">Backend Developer</h5>
      <p class="card-text">The ideal candidate will be responsible for the analysis, designing & development of various web/windows applications, Skills like ASP.Net,MVC,C#,</p>
      {/* <button type='submit' className='view-det-btn'>
                View Details
                </button>&nbsp;&nbsp;&nbsp;
                <button type='submit' className='apply-job-btn'>
                Apply Job
                </button> <br></br><br></br>  */}
                <a
                  href='#contact'
                  className='btn view-det-btn btn-lg page-scroll'
                >
                  View Details
                </a>{' '}
      </div>
    <div class="card-footer">
      <large class="text-muted">Bangalore, Karnataka | <Calendar/> 5 Days ago</large>
    </div>
  </div>
  <div class="card">
 
    <img class="card-img-top img-responsive" src="./img/backend.png" alt="Card image cap"/>{" "}
    <div class="card-body">
      <h5 class="card-title">Frontend Developer</h5>
      <p class="card-text">The ideal candidate will be responsible for the analysis, designing & development of various web/windows applications, Skills like ASP.Net,MVC,C#,</p>
      {/* <button type='submit' className='view-det-btn'>
                View Details
                </button>&nbsp;&nbsp;&nbsp;
                <button type='submit' className='apply-job-btn'>
                Apply Job
                </button> <br></br><br></br> */}
                <a
                  href='#contact'
                  className='btn view-det-btn btn-lg page-scroll'
                >
                  View Details
                </a>{' '}
      </div>
    <div class="card-footer">
      <large class="text-muted">Bangalore, Karnataka | <Calendar/> 5 Days ago</large>
    </div>
  </div>
</div>
</div>
</div>
<div class="b-example-divider"></div>
  
</div>


    )
}
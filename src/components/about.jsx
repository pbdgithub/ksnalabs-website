
export const About = (props) => {
  return (
    <div id="about"className='text-center'>
      <div className="container">
        <div className="row">
          <div className=" col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>About Us</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>


      {/* our vission and mission block */}

      {/* <div className="container"> */}
        <div className="row row-vm">
        <div className='section-title'>
          <h3>Our Mission And Vission</h3>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/mission.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="mission-text">
              <h4> </h4>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Mission.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
        <div className="row row-vm">
        <div className="col-xs-12 col-md-6">
            <div className="vission-text">
              <h4> </h4>
              <div className="list-style2">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Vission.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="vission-text">
            {" "}
            <img src="img/vission.png" className="img-responsive" alt="" />{" "}
              
            </div>
          </div>
        </div>
     </div>
 
  );
};

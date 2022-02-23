import { ReactComponent as Mail } from '../assets/Icon exports/Mail.svg';
export const Navigation = (props) => {
  return (
    <>
    <nav >
    <div className = " nav-container-top "> 
             <Mail/> &nbsp;<b>info@ksnalabs.com</b>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <a href="https://www.facebook.com/KSNALabs-1363489640420428/" target="blank"><img src="img/media3.svg" alt=""/></a>
            &nbsp;&nbsp; &nbsp;&nbsp;<a href="https://twitter.com/ksna_labs" target="blank"><img src="img/media4.svg" alt=""/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/company/80657946/admin/" target="blank"><img src="img/media1.svg" alt=""/></a>	
            &nbsp;&nbsp;&nbsp;&nbsp; <a href="#"><img src="img/media2.svg" title="Click to contact us" alt=" "/></a>
        </div>
    </nav>
    <nav id='menu' className='nav navbar-expand-lg '>
        <div className = 'navbar-logo'>
         <a href='#header' className='page-scroll'>    
            <img src="./img/companylogo.png" className="img-responsive" alt="" />{" "}
          </a>{' '}
          </div>
          <span></span>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          {/* <a href='#header' className='page-scroll'>    
            <img src="./img/companylogo.png" className="img-responsive" alt="" />{" "}
          </a>{' '} */}
          <li>
              <a href='#header' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#our_clients' className='page-scroll'>
                Our Clients
              </a>
            </li>
            <li>
              <a href='#technology' className='page-scroll'>
                Technology
              </a>
            </li>
            <li>
              <a href='#training' className='page-scroll'>
                Training
              </a>
            </li>
            <li>
              <a href='#careers' className='page-scroll'>
               Careers
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text1'>
                <h2>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>

              {/* <div className='col-md-8 col-md-offset-2 intro-text2'>
                <h2>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div class="b-example-divider"></div>
    </header>
  )
}
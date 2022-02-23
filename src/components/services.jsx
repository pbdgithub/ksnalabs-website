import { Image } from "./image";

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
      <h2>Currently Serving Industries</h2>
        <div className='row'>
       
       <div className = 'col-services-clients-blocks'>
      

       
       {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image  largeImage={d.largeImage} smallImage={d.smallImage}  />
                  
                </div>
              ))
              : 'Loading...'}
          
           </div>

        </div>
      </div>
    </div>
  )
}

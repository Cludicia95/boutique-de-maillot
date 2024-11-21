// Banner: Ce composant permettra de mettre en place le logo et le titre de la boutqiue .

import '../styles/Banner.css'

function Banner({children}){ 

    return(
          
        <div className='bdm-banner'>{children}</div> 
        
        
        
    )
}
  export default Banner;
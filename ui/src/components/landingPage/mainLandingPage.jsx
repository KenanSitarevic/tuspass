import '../../index.css';
import { Link } from "react-router-dom";

const MainLandingPage = () => {

  return (
    <div className='landing-bg'>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="row text-center justify-content-center align-items-center">
              <h4 className="my-5 font-51 custom-text-extra-light">TUSPASS</h4>
            <h1 className="text-center pt-md-5 mt-md-5 custom-text-bold font-63">SPOZNAJ SVOJ IDENTITET</h1>
            <h5 className="text-center font-30 landing-h5-width custom-text-regular">Tuspass je put da budete prvi u digitalizaciji i marketingu svoje unikatnosti putem NFC kartica</h5>
          </div>
        </div>
        <div className="row justify-content-center align-items-center novi-put-margin novi-put-bg pb-5">
          <div className='d-flex d-md-block flex-column justify-content-center align-items-center'>
            <h1 className="text-white pt-md-5 mt-md-5 custom-text-bold font-63">NOVI PUT</h1>
            <h5 className="text-white font-30 landing-h5-width custom-text-regular mb-5">Naš brend nudi NFC kartice koje nakon skeniranja moblinim uređajem vas vode na vašu online digitalnu visit kartu ili na link kao što je LinkedIn, Google Reviews, ili na vašu osobnu web stranicu</h5>
            <Link to={'register'} className='custom-btn big-btn-font white-hollow-btn me-md-4 mb-3 mb-md-0'>REGISTRACIJA</Link>
            <Link to={'login'} className='custom-btn big-btn-font white-btn'>PRIJAVA</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLandingPage
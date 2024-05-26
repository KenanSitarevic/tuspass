import logo from '../../../public/logoInverted.png';

const Button = () => {
  return (
      <div className="row justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center shadow-lg rounded-4 text-white my-5 px-4 " style={{width: '425px', height: '260px', backgroundColor: 'white'}}>
          {/* <h1 className="mb-0">Naruči svoju tuspass karticu</h1> */}
          <img src={logo} alt="Logo" style={{width: '300px', height: '300px'}} />
        </div>
      </div>
   
  )
}

export default Button
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center shadow rounded-circle profile-initials-gradient text-white my-5 px-4" style={{width: '100px', height: '100px'}}>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  )
}

export default Loader
import { GeoAltFill, ChevronRight } from 'react-bootstrap-icons';
const SocialItem = ({ title, icon }) => {
  return (
    <div className={'d-flex align-items-center justify-content-between shadow p-3 mb-4'}>
      { icon == 'location' &&
        <GeoAltFill color="#696969" />
      }
      <h6 className='col mb-0 text-center'>{title}</h6>
      <ChevronRight color="#696969" />
    </div>
  )
}

export default SocialItem
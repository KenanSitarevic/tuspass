import SocialItem from "./SocialItem"

const SocialsList = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <SocialItem title="Location" icon="location"></SocialItem>
        <SocialItem title="Biznis" icon="location"></SocialItem>
      </div>
    </div>
  )
}

export default SocialsList
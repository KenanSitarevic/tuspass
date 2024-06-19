import SocialItem from "./SocialItem"

const SocialsList = ({ user }) => {

  return (
    <div >
      <div className="d-flex justify-content-around">
        { user.facebook_profile && <SocialItem color={user.color} link={user.facebook_profile} icon="facebook"></SocialItem>}
        { user.instagram_profile && <SocialItem color={user.color} link={user.instagram_profile} icon="instagram"></SocialItem>}
        { user.twitter_profile && <SocialItem color={user.color} link={user.twitter_profile} icon="twitter"></SocialItem>}
        { user.linkedin_profile && <SocialItem color={user.color} link={user.linkedin_profile} icon="linkedin"></SocialItem>}
        { user.youtube_profile && <SocialItem color={user.color} link={user.youtube_profile} icon="youtube"></SocialItem>}
        { user.github_profile && <SocialItem color={user.color} link={user.github_profile} icon="github"></SocialItem>}
        { user.tiktok_profile && <SocialItem color={user.color} link={user.tiktok_profile} icon="tiktok"></SocialItem>}
      </div>
    </div>
  )
}

export default SocialsList
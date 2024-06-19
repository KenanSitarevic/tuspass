import { Facebook, Instagram, Twitter, Linkedin, Youtube, Github, Tiktok } from 'react-bootstrap-icons';
const SocialItem = ({ color, icon, link }) => {

  const redirect = () =>{
    return window.location.replace(link)
  }
 
  return (
    <div className={'d-flex p-3 mb-4'}>
      { icon == 'facebook' &&
        <Facebook onClick={redirect} color={color} size="4em" />
      }
      { icon == 'instagram' &&
        <Instagram onClick={redirect} color={color} size="4em" />
      }
      { icon == 'twitter' &&
        <Twitter onClick={redirect} color={color} size="4em" />
      }
      { icon == 'linkedin' &&
        <Linkedin onClick={redirect} color={color} size="4em" />
      } 
      { icon == 'youtube' &&
        <Youtube onClick={redirect} color={color} size="4em" />
      }
      { icon == 'github' &&
        <Github onClick={redirect} color={color} size="4em" />
      }
      { icon == 'tiktok' &&
        <Tiktok onClick={redirect} color={color} size="4em" />
      }

    </div>
  )
}

export default SocialItem
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const paths = require('../utils/paths.js')

const users = require(paths.modelsPaths.users)

class UsersService {
  async AddUser(username, first_name, last_name, passwordNotHashed, email, url, phone, occupation, company, city, address, zip_code, facebook_profile, instagram_profile, linkedin_profile, twitter_profile, youtube_profile, github_profile, tiktok_profile) {
    
    try {
      const saltRounds = 10
      const salt = bcryptjs.genSaltSync(saltRounds)
      const password = bcryptjs.hashSync(passwordNotHashed, salt)
      const User = await users.create({ username, first_name, last_name, password, email, url, phone, occupation, company, city, address, zip_code, facebook_profile, instagram_profile, linkedin_profile, twitter_profile, youtube_profile, github_profile, tiktok_profile })
      
      if (User !== null) { return User } else { return false }
    } catch (error) {
      throw error
    }
  }

  async updateUser(username, first_name, last_name, email, occupation, url, phone, id, company, city, address, zip_code, facebook_profile, instagram_profile, linkedin_profile, twitter_profile, youtube_profile, github_profile, tiktok_profile){
    try {
      const User = await users.update({username, first_name, last_name, email, occupation, url, phone, company, city, address, zip_code, facebook_profile, instagram_profile, linkedin_profile, twitter_profile, youtube_profile, github_profile, tiktok_profile}, {
        where: {id}
      });
      return User;
    } catch (error) {
      console.log(error);
    }
  }

  async changeUserPassword(passwordNotHashed, id){
    try {
      const saltRounds = 10
      const salt = bcryptjs.genSaltSync(saltRounds)
      const password = bcryptjs.hashSync(passwordNotHashed, salt)
      const User = await users.update({ password }, { where: {id}})
      return User
    } catch (error) {
      console.log(error);
    }
  }

  async LogIn(email, passwordNotHashed) {
    try {
      const User = await users.findOne({ where: { email } })
      if (!User) {
        throw new Error('Invalid email')
      }

      const passwordMatch = await bcryptjs.compare(passwordNotHashed, User.password)
      if (!passwordMatch) {
        throw new Error('Invalid password')
      } 
      

      const token = jwt.sign({ id: User.id }, process.env.SECRET_KEY, { expiresIn: '1h' })
      return {
        id: User.id,
        username: User.username,
        first_name: User.first_name,
        last_name: User.last_name,
        email: User.email,
        url: User.url,
        phone: User.phone,
        occupation: User.occupation,
        company: User.company,
        city: User.city,
        address: User.address,
        zip_code: User.zip_code,
        facebook_profile: User.facebook_profile,
        instagram_profile: User.instagram_profile,
        linkedin_profile: User.linkedin_profile,
        twitter_profile: User.twitter_profile,
        youtube_profile: User.youtube_profile,
        github_profile: User.github_profile,
        tiktok_profile: User.tiktok_profile,
        token
      }
    } catch (error) {
      throw error
    }
  }

  async getUserInfo(id) {
    try {
      const User = await users.findByPk(id)
      if (User !== null) {
       
        return User }
        else { return false }
    } catch (error) {
      throw error
    }
  }
}

module.exports = new UsersService()

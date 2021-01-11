import React from 'react'
import Mamae from '../images/mamae.jpg'
import Papai from '../images/papai.jpg'
import Bebe from '../images/boy_or_girl.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
      <img className="profile_image papai" src={Papai} alt="Perfil do Papai"/>
      </div>
      <div className="profile">
        <img className="profile_image mamae" src={Mamae} alt="Perfil da Mamãe"/>
      </div>
      <div className="profile">
        <img className="profile_image bebe" src={Bebe} alt="Perfil do Bebê"/>
      </div>
    </div>
  )
}

export default Header
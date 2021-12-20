import React from 'react'
import './style.css'
import illustration from '../assets/home/illustration.svg'
import { NavLink } from "react-router-dom";

const landingLayout = () => {
    const isAuth = true;
    return (
        <div className="wl_sp_lp_main">
            <div className="wl_sp_lp_lft">
                <h1>Stac Portal</h1>
                <p>
                    Lorem ipsum dolor sit amet. In minus internos quo voluptatem temporibus ex dolore dolore qui laborum doloremque. Qui voluptate quidem et dolorum voluptate cum obcaecati sapiente qui placeat fuga.
                </p>
                <p>
                    Aut omnis excepturi eos laborum laudantium eos unde voluptas aut laudantium consequatur. Ut illum adipisci qui blanditiis voluptate sed consequatur inventoreet quia quia. In odio ducimus vel ullam quae cumque natus.
                </p>
                <p>
                    Et vitae dolor et rerum blanditiis ut harum molestiae? Aut repellat voluptatem et architecto voluptatem est voluptas quae quo quis tenetur.
                </p>
                <NavLink to="/application">
                    <button>{isAuth?"Apply":"Login"}</button>
                </NavLink>
            </div>
            <div className="wl_sp_lp_rgt">
                <img src={illustration} alt="" />
            </div>
        </div>
    )
}

export default landingLayout

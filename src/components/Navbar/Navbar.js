import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export function Navbar() {
    return (

         <nav>
            <div className="n_left">
                <h1>EFood</h1>
            </div>
             <div className="nn_right">
             <div className="n_center">
                <NavLink  >
                    Home
                </NavLink>
                <NavLink  >
                    Service
                </NavLink>
                <NavLink  >
                    Top cities
                </NavLink>
                <NavLink  >
                    Contract
                </NavLink>

            </div>
            <div className="n_right">
                <NavLink>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Iconly/Light/Search">
<g id="Search">
<ellipse id="Ellipse_739" cx="11.7666" cy="11.8408" rx="8.98856" ry="8.88424" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Line_181" d="M18.0183 18.4814L21.5423 21.9555" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>

                </NavLink>

                <NavLink>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.17578L3.08 1.5316L4.04301 12.8715C4.12001 13.7976 4.90301 14.5082 5.84301 14.5053H16.752C17.649 14.5072 18.41 13.8549 18.537 12.9772L19.486 6.49532C19.592 5.77083 19.083 5.09872 18.351 4.99395C18.287 4.98505 3.414 4.98011 3.414 4.98011" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.375 8.63337H15.1479" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.4043 17.9316C5.70527 17.9316 5.94824 18.1729 5.94824 18.4696C5.94824 18.7673 5.70527 19.0085 5.4043 19.0085C5.10333 19.0085 4.86035 18.7673 4.86035 18.4696C4.86035 18.1729 5.10333 17.9316 5.4043 17.9316Z" fill="#363853" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6846 17.9316C16.9856 17.9316 17.2296 18.1729 17.2296 18.4696C17.2296 18.7673 16.9856 19.0085 16.6846 19.0085C16.3836 19.0085 16.1406 18.7673 16.1406 18.4696C16.1406 18.1729 16.3836 17.9316 16.6846 17.9316Z" fill="#363853" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </NavLink>

             <button>
             Sign Up
             </button>

            </div>

             </div>
        </nav>
      


    )
}

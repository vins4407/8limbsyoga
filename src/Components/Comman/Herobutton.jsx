import React from 'react'
import './herobutton.css'

function Herobutton () {
    return (
        <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;8 LIMBS&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;8 LIMBS&nbsp;</span>
        </button>
    )
}

export default Herobutton
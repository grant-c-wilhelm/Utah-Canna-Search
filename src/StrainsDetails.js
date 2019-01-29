import React from 'react'

function StrainsDetails({ name, race, flavors, ...props }) {
    return (

        <section id="specificStrainDetails">
            <ul {...props}> 
                <div className='wrapper'>
                    <li>
                        <h3>Strain Name: {name}</h3>
                        <h5>Genetics: {race}</h5>
                        <h5>Flavors: {flavors.join(", ")}</h5>
                    </li>
                </div>

            </ul>
        </section>

    )
}
export default StrainsDetails

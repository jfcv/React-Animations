import React from 'react'
import {Spring} from 'react-spring/renderprops'

export default function Component2() {
    return (

        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: 1000, duration: 1000}}
        >

            { props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>Component 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis eum sequi officia unde quis odit, rem et odio inventore eius quibusdam dignissimos architecto quam ea quia ex perferendis molestiae?</p>
                    </div>
                </div>
            )}

        </Spring>

    )
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}
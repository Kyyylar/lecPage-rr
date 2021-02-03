import React from 'react';
import '../styles/Start.css';

const Start = (props) => {

    return ( 
        <div className="start">
            <h1>L<span>eague of Legends</span> E<span>uropean</span> C<span>hampionship</span></h1>
            <button onClick={props.click}>Start</button>
        </div>
     );
}
 
export default Start;
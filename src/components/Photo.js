import React from 'react';

const Photo = props => {
    console.log(props);
    return (
        <figure className="figure">
            <img src={props.post.imageLink} alt={props.post.description} />
        </figure>
    );
}

export default Photo;

import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => {
    console.log(props);
    return (
        <figure className="figure">
            <img className='photo' src={props.post.imageLink} alt={props.post.description} />
            <figcaption>
                <p>
                    {props.post.description}
                </p>
            </figcaption>
            <div className='button-container'>
                <button onClick={() => {
                    props.onPressDelete(props.post)
                }}>Delete</button>
            </div>
        </figure>
    );
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onPressDelete: PropTypes.func.isRequired
}

export default Photo;

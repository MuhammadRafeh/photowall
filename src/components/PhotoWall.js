import React from 'react';
import Photo from './Photo';

const PhotoWall = props => {
    return (
        <div className="photo-grid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onPressDelete={props.onPressDelete}/>)}
        </div>
    );
}

export default PhotoWall;

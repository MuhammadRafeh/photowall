import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

const PhotoWall = props => {
    return (
        <div>
            <Link className="add-icon" to="/AddPhoto" /> {/*Its is fast to navigate */}
            {/* <a href="/AddPhoto" className="add-icon"></a> */} {/*It request everytime to server to render this page */}
            <div className="photo-grid">
                {props.posts
                    .sort((first, second) => (
                        second.id - first.id
                    ))
                    .map((post, index) => <Photo key={index} post={post} onPressDelete={props.onPressDelete} />)}
            </div>
        </div>
    );
}

export default PhotoWall;

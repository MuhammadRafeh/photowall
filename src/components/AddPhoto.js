import React from 'react';

const AddPhoto = props => {
    return (
        <div>
            <h1>Photowall</h1>
            <form className="form">
                <input type="text" placeholder="Link"/>
                <input type="text" placeholder="Description"/>
                <button>Post</button>
            </form>
        </div>
    );
}

export default AddPhoto;
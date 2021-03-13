import React from 'react';
import { useHistory } from "react-router-dom";

const AddPhoto = props => {

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const { link, description } = e.target.elements
        if (link.value && description.value) {
            props.addPhoto({
                id: 0,
                description: description.value,
                imageLink: link.value
            })
            history.push('/');
        }
    }

    return (
        <div>
            <h1>Photowall</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Link" name="link" />
                <input type="text" placeholder="Description" name="description" />
                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default AddPhoto;

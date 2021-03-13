import React from 'react';

const AddPhoto = props => {

    const handleSubmit = e => {
        e.preventDefault();
        const { link, description } = e.target.elements
        if (link.value && description.value) {
            props.addPhoto({
                id: 0,
                description: description.value,
                imageLink: link.value
            })
            props.history.push('/');
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

import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddPhoto from './AddPhoto';
// import List from './List';
import PhotoWall from './PhotoWall';
import Title from './Title';

const Main = props => {

    const [posts, setPosts] = useState(
        [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
        }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
        }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    );

    const removePhoto = post => {
        setPosts(posts.filter(obj => obj !== post));
    }

    const addPhoto = post => { //post is obj
        setPosts(posts.concat(post));
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Title title='Photowall' />
                        {/* <button className="add-icon"></button> */}
                        <PhotoWall posts={posts} onPressDelete={removePhoto} />
                    </Route>
                    <Route path="/AddPhoto">
                        <AddPhoto addPhoto={addPhoto} posts={posts} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Main;

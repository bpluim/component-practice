import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './components/Comment';

const App = () => {
    return (
        <div className="ui container comments">
            <Comment 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post!" 
                avatar={faker.image.avatar()}
            />
            <Comment 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="I like the subject" 
                avatar={faker.image.avatar()}
            />
            <Comment 
                author="Jane" 
                timeAgo="Yesterday at 5:35PM" 
                content="I love it!" 
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render( <App />, document.querySelector('#root'));
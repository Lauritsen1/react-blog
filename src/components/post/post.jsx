import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './post.scss';

import { db } from '../../firebase';

const Post = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection('posts')
            .get()
            .then((querySnapshot) => {

                const postsArray = [];

                querySnapshot.forEach((doc) => {

                    postsArray.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });

                console.log(postsArray)

                setPosts(postsArray);
            });

    }, []);

    return (
        <>
            {posts.map((post, index) => {

                return (
                    <article key={index} className='post'>
                        <div className='post__header'>
                            <img className='post__image' src={post.image} alt='' />
                        </div>
                        <div className='post__author'>Written by: <Link to=''>{post.author}</Link></div>
                        <div className='post__text'>
                            <h2 className='post__title'>{post.title}</h2>
                            <p className='post__date'>{post.dateTime}</p>
                            <p className='post__summary'>{post.content}</p>
                        </div>
                    </article>
                )

            })
            }
        </>
    );
}

export default Post;
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
            {posts.map(post => {

                return (
                    <article key={post.id} className='post'>
                        <Link className='post__link' to={`/post/${post.id}`}>
                            <div className='post__inner-container'>
                                <div className='post__header'>
                                    <img className='post__image' src={post.image} alt='' />
                                </div>
                                <div className='post__author'>Written by: {post.author}</div>
                                <div className='post__text'>
                                    <h2 className='post__title'>{post.title}</h2>
                                    <p className='post__date'>{post.dateTime}</p>
                                    <p className='post__summary'>{post.content.substring(0, 100)}..</p>
                                </div>
                            </div>
                        </Link>
                    </article>
                )

            })
            }
        </>
    );
}

export default Post;
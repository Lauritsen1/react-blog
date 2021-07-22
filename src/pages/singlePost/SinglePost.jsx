import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './singlePost.scss';

import { db } from '../../firebase';

const SinglePost = () => {

    const [post, setPost] = useState({});

    let { id } = useParams();

    useEffect(() => {

        db.collection('posts').doc(id)
            .get().then((doc) => {

                if (doc.exists) {
                    setPost(doc.data());
                }

            })

    }, [id])

    return (
        <div className='single-post'>
            <div className='single-post__header'>
            <p className='single-post__date-time'>{post.dateTime}</p>
                <h1 className='single-post__title'>{post.title}</h1>
                
                <p className='single-post__author'>Written by: {post.author}</p>
            </div>

            <div>
                <img className='single-post__image' src={post.image} alt="" />
                <p className='single-post__content'>{post.content}</p>
            </div>
        </div>
    )
}

export default SinglePost;
import './post.scss';

const Post = () => {
    return (
        <article className="post">
            <div className="post__header">
                <img className="post__image" src="https://web.archive.org/web/20210428220839im_/https://files.facepunch.com/garry/1cd4bcc4-0989-435c-ba42-2bd494c0f88f.png" alt="" />
            </div>
            <div className="post__author">Written by: Laurbærblad</div>
            <div className="post__text">
                <h2 className="post__title">Lorem Ipsum</h2>
                <p className="post__date">Wednesday, March 31, 2021</p>
                <p className="post__summary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad id, explicabo a repellat modi natus.</p>
            </div>
        </article>
    );
}

export default Post;
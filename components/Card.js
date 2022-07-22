import { forwardRef } from 'react'
import { urlFor } from '../lib/sanity'
import Tag from './Tag'
const Card = forwardRef(({onClick, href, post}, ref) => {

    const { title, mainImage, username, authorImage, categories } = post

    return (
        <div className="card-container" href={href} onClick={onClick} ref={ref}>
            <h2>{title}</h2>
            <p>Published on: {new Date(post.publishedAt).toDateString()}</p>

            <img className="main-image"
                alt = {title +" image"}
                src = {urlFor(mainImage)}
            />

            <hr/>

            <div className="info-container">
                <p>Posted by: {username}</p>
                <img
                    className='avatar'
                    alt = {username +' avatar'}
                    src = {urlFor(authorImage)}
                />
            </div>

            <div className='tag-container'>
                {categories.map((category) =>(
                    <div>
                    { category && <Tag key={category?.id} title = {category?.title}/>}
                    </div>
                ))}
            </div>
        </div>
    )
})

export default Card
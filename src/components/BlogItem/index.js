// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {data} = props
  const {id, title, author, topic, imageUrl, avatarUrl} = data

  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <img src={imageUrl} alt="main_image" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div>
            <img src={avatarUrl} alt="avatar_image" />
            <p>{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem

// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    data: {},
    isLoading: true,
  }

  componentDidMount() {
    this.detailsData()
  }

  detailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const update = {
      title: data.title,
      content: data.content,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({data: update})
  }

  render() {
    const {data, isLoading} = this.state
    const {avatarUrl, imageUrl, content, title, author} = data
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="00bfff" height={50} width={50} />
        ) : (
          <div>
            <h1>{title}</h1>

            <div>
              <img src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>

            <img src={imageUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

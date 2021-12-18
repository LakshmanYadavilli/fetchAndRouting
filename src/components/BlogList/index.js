// Write your JS code here
import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    data: [],
    isLoading: true,
  }

  componentDidMount() {
    this.BlogListData()
  }

  BlogListData = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()

    console.log(data)
    const updatedData = data.map(n => ({
      author: n.author,
      avatarUrl: n.avatar_url,
      id: n.id,
      imageUrl: n.image_url,
      title: n.title,
      topic: n.topic,
    }))
    console.log(updatedData)
    this.setState((data: updatedData))
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="00bfff" height={50} width={50} />
        ) : (
          <ul>
            {data.map(n => (
              <BlogItem data={n} key={n.id} />
            ))}
          </ul>
        )}{' '}
      </div>
    )
  }
}

export default BlogList

import "./Blog.css"

const Blog = (props) =>{
    return(
        <div className="blog">
              <p>{props.title}</p>
              <p>{props.author}</p>
              <p>{props.content}</p>
              <p>{props.date}</p>
        </div>
    )
}
export default Blog
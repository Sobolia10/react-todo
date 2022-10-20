import Post from './Post'

const PostList =({arrayPost})=>{
    return (
    <div>
         {arrayPost.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
    )
}
export  default PostList
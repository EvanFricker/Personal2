import Post from "./Post"


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot (query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    ),
    [db]
  );

  return (
    <div>
      {posts.map((post)=>(
        <Post 
          key={post.id} 
          id={post.id} 
          username={post.data().username} 
          userImg={post.data().profileImg} 
          img={post.data().img}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts

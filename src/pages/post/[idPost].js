import { useRouter } from "next/router"
import { useEffect, useState } from "react"


import { onValue, ref } from 'firebase/database'
import { database } from "../../services/firebase"
import { PostDetails } from "../../components/PostDetails"



export default function IdPost() {
  const router = useRouter()
  const { idPost } = router.query
  const [post, setPost] = useState({})

  useEffect(() => {
    const postsRef = ref(database, `posts/${idPost}`)
    onValue(postsRef, (value) => {
      const data = value.val()
      setPost(data)
    })

  }, [idPost])

  return (
    <>
      <PostDetails 
        author={post.author}
        content={post.content}
      />
    </>
  )
}
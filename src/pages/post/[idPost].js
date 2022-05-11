import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import { onValue, ref } from 'firebase/database'
import { database } from "../../services/firebase"

import { PostDetails } from "../../components/PostDetails"
import { NewComment } from "../../components/NewComment"
import { UserInfo } from "../../components/UserInfo"
import { AllComments } from "../../components/PostComments"
import { Container, MainContent } from "../../components/PostDetails/styles"
import { useComments } from "../../hooks/useComments"
import { CommentTitle } from "../../components/PostComments/styles"
import { NavbarApplication } from "../../components/NavbarApplication"

export default function IdPost() {
  const router = useRouter()
  const { comments } = useComments()
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
      <NavbarApplication />
      <Container>
        <UserInfo />

        <MainContent>
          <PostDetails 
            author={post.author}
            content={post.content}
          />
          <NewComment idPost={idPost} />
          <CommentTitle>Comentário(s)</CommentTitle>
          {comments && comments.map(comment => (
                <AllComments
                  key={comment.id}
                  idComment={comment.id}
                  comment={comment.comment}
                  author={comment.author}
                />
              )).reverse()}
        </MainContent>
      </Container>
    </>
  )
}
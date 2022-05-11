import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { database } from '../services/firebase'
import { onValue, ref } from 'firebase/database'


export function useComments() {
  const router = useRouter()
  const { idPost } = router.query
  const [comments, setComments] = useState([])

  useEffect(() => {
    const commentsRef = ref(database, `posts/${idPost}/comments`)
    onValue(commentsRef, (value) => {
      const data = value.val()

      if (!data) {
        return
      }

      const parsedComments = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          comment: value.comment,
          author: value.author,
        }
      })
      setComments(parsedComments)
    })

  }, [idPost])

  return { comments }
}
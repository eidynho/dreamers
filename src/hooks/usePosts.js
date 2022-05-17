import { useEffect, useState } from 'react'

import { database } from '../services/firebase'
import { onValue, ref } from 'firebase/database'

export function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsRef = ref(database, 'posts/')
    onValue(postsRef, (value) => {
      const data = value.val()

      if (!data) {
        return
      }

      const parsedPosts = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
        }
      })
      setPosts(parsedPosts)
    })

  }, [])

  return { posts }
}
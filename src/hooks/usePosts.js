import { useEffect, useState } from 'react'

import { useAuth } from './useAuth'

import { database } from '../services/firebase'
import { onValue, ref } from 'firebase/database'


export function usePosts() {
  const { user } = useAuth()
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
          likeCount: Object.values(value.likes ?? {}).length,
          hasLiked: Object.values(value.likes ?? {}).some(like => like.authorId === user?.id)
        }
      })
      setPosts(parsedPosts)
    })

  }, [user?.id])

  return { posts }
}
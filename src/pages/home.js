import { usePosts } from '../hooks/usePosts'

import { AllPosts } from '../components/AllPosts'
import { Container, DashboardContent, Timeline } from '../styles/homeStyles'
import { UserInfo } from '../components/UserInfo'
import { NewPost } from '../components/NewPost'

export default function Dashboard() {
  const { posts } = usePosts()

  return (
    <>
      <DashboardContent>
        <Container>
          <UserInfo />

          <Timeline>
            <NewPost />
            {posts && posts.map(post => (
              <AllPosts
                key={post.id}
                idPost={post.id}
                content={post.content}
                author={post.author}
              />
            )).reverse()}
          </Timeline>

        </Container>
      </DashboardContent>
    </>
  )
}
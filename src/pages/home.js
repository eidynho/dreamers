import { usePosts } from '../hooks/usePosts'

import { NavbarApplication } from '../components/NavbarApplication'
import { AllPosts } from '../components/Home/AllPosts'
import { UserInfo } from '../components/UserInfo'
import { NewPost } from '../components/Home/NewPost'

import { Container, HomeContent, Timeline } from '../styles/homeStyles'

export default function Home() {
  const { posts } = usePosts()

  return (
    <>
      <NavbarApplication />
      <HomeContent>
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
      </HomeContent>
    </>
  )
}
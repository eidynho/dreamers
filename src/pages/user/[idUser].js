import { useAuth } from "../../hooks/useAuth"


export default function UserProfile() {
const { user } = useAuth()
  return (
    <>
      <h1>ID USER</h1>
      <p>{user && user.name}</p>
    </>
  )
}
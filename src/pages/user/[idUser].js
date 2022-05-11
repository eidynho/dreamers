import { NavbarApplication } from "../../components/NavbarApplication"
import { useAuth } from "../../hooks/useAuth"


export default function UserProfile() {
const { user } = useAuth()
  return (
    <>
      <NavbarApplication />
      <h1>ID USER</h1>
      <p>{user && user.name}</p>
    </>
  )
}
import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const GuitarApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}

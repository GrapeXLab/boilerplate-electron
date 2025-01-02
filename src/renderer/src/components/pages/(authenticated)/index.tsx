/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Button } from '@renderer/components/ui/button'
import { AuthContext } from '@renderer/context/auth'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const { logout } = useContext(AuthContext)
  return (
    <div>
      <h1>Página Inicial</h1>
      <Button onClick={logout}>ss</Button>
      <Link to="/teste/tes/s">Ir para Sobre</Link>
    </div>
  )
}

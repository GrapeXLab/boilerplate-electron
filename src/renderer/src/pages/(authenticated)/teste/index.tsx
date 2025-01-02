import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function Teste(): ReactElement {
  return (
    <div>
      <h1>Teste</h1>
      <Link to="/teste/1">Voltar para Home</Link>
    </div>
  )
}

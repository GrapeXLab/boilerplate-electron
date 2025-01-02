import { ReactElement } from 'react'
import { useParams } from 'react-router-dom'

export default function Teste(): ReactElement {
  const { id } = useParams()

  return (
    <div>
      <h1>Teste {id}</h1>
    </div>
  )
}

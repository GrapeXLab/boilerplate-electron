import { useParams } from 'react-router-dom'

export default function Teste() {
  const { id } = useParams()

  return (
    <div>
      <h1>Teste {id}</h1>
    </div>
  )
}

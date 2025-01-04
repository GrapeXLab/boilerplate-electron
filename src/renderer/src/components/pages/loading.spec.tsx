import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoadingPage from './loading'

describe('LoadingPage', () => {
  it('should render', () => {
    const { container } = render(<LoadingPage />)

    expect(screen.getByText('Carregandos')).toBeInTheDocument()
  })
})

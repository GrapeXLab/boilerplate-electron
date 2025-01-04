import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoadingPage from './loading'

describe('LoadingPage', () => {
  it('should render', () => {
    render(<LoadingPage />)

    expect(screen.getByText('Carregando')).toBeInTheDocument()
  })
})

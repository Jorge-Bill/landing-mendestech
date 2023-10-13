import { render as rtlRender, screen } from '@testing-library/react'
import Home from 'pages/home'

test('full app rendering/navigating', async () => {
  const { user } = render(<Home />)
  expect(screen.getByText(/Jorge Mendes/i)).toBeInTheDocument()

  await user.click(screen.getByText(/About Me/i))

  expect(screen.getByText(/Hello, I'm Jorge/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  render(<Home />, { route: '/something-that-does-not-match' })

  expect(screen.getByText(/404/i)).toBeInTheDocument()
})

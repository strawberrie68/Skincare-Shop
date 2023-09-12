import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Result from '@/pages/quiz2/Result'

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<Result />)
    expect(true).toBeTruthy()
})
import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SortPanel from 'app/SortPanel'

import render, { testContext } from './settings/render'

export default () => {
    describe('<App />', AppTest)
}

const AppTest = () => {
    describe('<SortPanel />', SortPanelTest)
}

const SortPanelTest = () => {
    const setState = (newState) => (sorting.state = newState)
    const initState = { on: false, ascending: null }
    const sorting = { state: initState, setState }
    const testContextValue = { sorting }

    const mockButtonClick = (buttonFunc) => {
        sorting.setState = buttonFunc
        render(<SortPanel testContext={testContext} />, { testContextValue })
        const button = screen.getByRole('button')
        fireEvent.click(button)
    }

    it('TEST #1: should call the function «setSorting» on button click', () => {
        const mockFunc = jest.fn()
        mockButtonClick(mockFunc)
        expect(mockFunc).toBeCalledTimes(1)
    })

    it('TEST #2: should set the sorting in ascending order on first button click', async () => {
        mockButtonClick(setState)
        const { on, ascending } = sorting.state
        expect(on && ascending).toBe(true)
    })

    it('TEST #3: should set the sorting in decreasing order on second button click', async () => {
        mockButtonClick(setState)
        const { on, ascending } = sorting.state
        expect(on && !ascending).toBe(true)
    })
}

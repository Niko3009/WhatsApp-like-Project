import { useContext } from 'react'
import {
    TbCircleArrowUp as ArrowUp,
    TbCircleArrowDown as ArrowDown,
} from 'react-icons/tb'
import { IconContext } from 'react-icons'

import { appContext } from 'app'

import * as Styled from './style'

export default ({ testContext }) => {
    const context = useContext(testContext || appContext)
    return (
        <Styled.Wrapper>
            <p>Сортировка:</p>
            <SortButton {...context.sorting} />
        </Styled.Wrapper>
    )
}

export const SortButton = ({ state, setState }) => {
    const { on, ascending } = state
    const changeSorting = () => {
        const newSorting = { ...state }
        newSorting.on = !on || ascending
        newSorting.ascending = !on
        setState(newSorting)
    }
    return (
        <Styled.Button onClick={changeSorting}>
            <p> по числу репозиториев </p>
            {on && <Detector ascending={ascending} />}
        </Styled.Button>
    )
}

const Detector = ({ ascending }) => {
    return (
        <IconContext.Provider value={{ color: '#0088ff', size: '32px' }}>
            <Styled.Detector>
                <p>{ascending ? <ArrowUp /> : <ArrowDown />}</p>
            </Styled.Detector>
        </IconContext.Provider>
    )
}

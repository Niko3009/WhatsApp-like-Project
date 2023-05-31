import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html,
    body {
        background-color: #1c1c1c;
        width: 100%;
        height: 100%;

        color: #ffffff;
        font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu';
        font-family: 'StratosSkyeng', sans-serif;

        /* scrollbar */
        * {
            scrollbar-width: thin;
            &::-webkit-scrollbar {
                width: 4px;
                height: 5px;
            }
            &::-webkit-scrollbar-track {
                border-radius: 8px;
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background-color: transparent;
                border-radius: 4px;
                border: 0px solid transparent;
            }
        }

        *:hover {
            &::-webkit-scrollbar-thumb {
                background-color: white;
            }
        }

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        *:before,
        *:after {
            box-sizing: border-box;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
        :visited {
            text-decoration: none;
            cursor: pointer;
        }
    }

    ul li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`

import styled from "styled-components";

const homePage = styled.div`
.Home {
    min-height: 100vh;
    max-width: 100vw;
    font-family: 'Urbanist', sans-serif;
        .Header {
        display: flex;
        justify-content: space-between;
        padding: 30px 0 0 0;
        width: 90vw;
        margin: 0 auto;
        .Logo {
            img {
                width: 80px;
            }
        }
        .Buttons {
            display: flex;
            gap: 10px;
            align-items: center;
            a {
                &:nth-child(1) {
                    border: none;
                    background-color: transparent;
                    font-size: 14px;
                    cursor: pointer;
                    transition: .3s;
                    font-weight: 600;

                    :hover {
                        color: #7510f7;
                        transform: .3s;
                    }
                }
                &:nth-child(2) {
                    text-decoration: none;
                    padding: 10px 15px;
                    border: 1px solid #7510f7;
                    background-color: transparent;
                    font-size: 14px;
                    font-weight: 600;
                    border-radius: 50px;
                    color: #7510f7;
                    cursor: pointer;
                    transition: .3s;

                    :hover {
                        background-color: #7510f7;
                        color: #FFF;
                        transform: .3s;
                    }
                }
            }
        }
    }
    .MainContent {
        background-position: center;
        background-size: cover;
        position: relative;
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        .Avatar {
            img {
                width: 250px;
            }
        }
        small {
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 20px 0;
            font-size: 20px;
            font-weight: 500;
            color: #7510f7;
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 20px;

            svg {
                margin-top: 10px;
                font-size: 16px;
                animation: float 2s infinite linear;
            }
            @keyframes float{
                0%,100%{
                    transform:translatey(0)
                }
                50%{
                    transform:translatey(-6px)
                }
            }
        }
        h1 {
            margin: -50px auto 0 auto;
            color: #272822;
            font-size: 28px;
            font-weight: 500;
            text-align: center;
            width: 90vw;

            svg {
                color: #7510f7;
            }
        }
    }
}
`

export default homePage;
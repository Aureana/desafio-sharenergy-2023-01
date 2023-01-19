import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #282c34;
    color: #FCF4A9;
    height: 20vh;
    width: 100%;
`
export const MainTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    height: 70%;

    h1{
        background: -webkit-linear-gradient(0deg, rgba(0, 192, 253, 1) 0%, rgba(231, 15, 170, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
`
export const MainMenu = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30%;
    padding-top: 2vh;
    
    div:first-child{
        padding-left: 4vw;
    }
    
    div:last-child{
        
        span{
            height: 100%;
            padding-right: 2vw;
        }

        span:hover{    
            cursor:pointer;            
        }

    }

    @media screen and (max-device-width: 700px){
        span{
            font-size: 12px;
        }

        img{
            width: 40px;
        }
    }
    `


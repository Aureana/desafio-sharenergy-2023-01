import styled from "styled-components";

export const MainModal = styled.div`
    border-radius: 8px;
    border: 1px solid black;
    background-color: white;
    width: 30%;
    min-width: 300px;
    position: absolute;
    top: 30%;
    left: 30%;
    padding: 8px;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     
    h3{
        margin-bottom: 12px;
    }
    p{
        font-size: 12px;
    }

    .errorRegister{
        color: red;
        font-size: 14px;
        margin-bottom: 8px;
    }

    input{
        width: 80%;
        height: 4vh;
        margin-bottom: 2vh;
        text-align: center;
        border-radius: 8px;
        background-color:  #DCDCDC;
        border: 1px solid  #DCDCDC;
        
        }
    
        input:hover{
            border-bottom: 2px solid #DCDCDC;
            cursor: pointer;
    
        }
    
        input:focus{   
            background-color:  #848484;
            outline: none;
        }

        .RegisterButton, .CancelButton{
            width: 100px;
            height: 4vh;
            color: #FCF4A9;
            border: none;
            border-radius: 8px;            
            background-color:  #848484; 
        }

        .RegisterButton:hover, .CancelButton:hover{
            cursor: pointer;
            background-color: #848484;
        }
    }

    div:last-child{
        flex-direction: row;
        gap: 2vw;
    }

`
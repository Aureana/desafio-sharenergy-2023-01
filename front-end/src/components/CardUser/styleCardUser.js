import styled from "styled-components";

export const MainCard = styled.div`
    width: 300px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    border-radius: 20px;
    box-shadow: 4px 4px 2px #848484;
    
    div:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        width: 100%;
        padding-top: 8px;

        img{
            border: 1px solid black;
            padding: 2px;
            border-radius: 30%;
        }
        h2{
          
          transition: transform .3s;          
      }
      h2:hover{
          cursor: pointer;
          color: #282c34;
          transform: scale(1.1);

      }
      p{
        
        transition: transform .3s;          
    }
    p:hover{
        cursor: pointer;
        color: #282c34;
        transform: scale(1.1);

    }
    }

    div:last-child{
        width: 100%;
        padding-left: 12px;
        text-align: center;
        
         p{
            font-size: 12px;
            transition: transform .3s;          
        }

        
    }



`
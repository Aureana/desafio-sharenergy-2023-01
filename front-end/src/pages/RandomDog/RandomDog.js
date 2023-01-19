import Header from "../../components/Header/Header"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { MainContainer, MainShowCard, BoxIntro, Button, CardPet } from "../../constants/stylePageGlobal"
import { GlobalContext } from "../../context/GlobalContext"
import dogloading from "../../assets/img/dogloading.gif"
import { goToLoginPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

function RandomDog (){

    const [randomDog, setRandomDog] = useState('') 
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(!context.auth){
            if(!token){
        goToLoginPage(navigate) 
        }
         }        
    },[])

    useEffect(()=>{
        browserDog()
    },[])

     const browserDog = async ()=>{
        context.setLoading(true)
        try{
            
            const response = await axios.get(`https://random.dog/doggos`)
            const i = Math.floor(Math.random()*1030)
            const auxDog = response.data[i]           
            setRandomDog(auxDog)
            context.setLoading(false)
        }catch(error){
            console.log(error)
            context.setLoading(false)
        }
    }

    return(
        <>
        <Header/>
        <MainContainer>

            <BoxIntro>             
                <div>
                    Clique no botão abaixo para visualizar os Dogs.
                </div>               
            </BoxIntro>

            <div>
                {context.Loading ? 'Carregando' : <Button onClick={()=>browserDog()}>Atualizar</Button>}
            </div>

            <MainShowCard>
                <CardPet>
                    {context.Loading ? <img src={`https://random.dog/${dogloading}`} alt="random-dog"/> : <img src={`https://random.dog/${randomDog}`} alt="random-dog"/>}
                </CardPet>
            </MainShowCard>

        </MainContainer>
        </>
    )
}

export default RandomDog
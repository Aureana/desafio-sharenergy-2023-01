import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import {ContainerHeader, MainMenu, MainTitle} from "./styleHeader"
import { goToHomePage, goToHTTPCatPage, goToRandomDog, goToRegisterClient, goToLoginPage } from "../../routes/coordinator"
import { GlobalContext } from "../../context/GlobalContext"


function Header(){

    const navigate = useNavigate()
    const context = useContext(GlobalContext)

    const logout = ()=>{
        context.setAuth(false)
        localStorage.clear() 
        goToLoginPage(navigate)      
    }

    return(
        <ContainerHeader>

        <MainMenu>
          

            <div>
                <p>
                    <span onClick={()=>goToHomePage(navigate)}>Random Users</span>
                    <span onClick={()=>goToHTTPCatPage(navigate)}>HTTP Cat</span>
                    <span onClick={()=>goToRandomDog(navigate)}>Random Dog</span>
                    <span onClick={()=>goToRegisterClient(navigate)}>Cadastro de Clientes</span>
                    <span onClick={()=>logout()}>Sair</span>
                </p>
            </div>
        </MainMenu>

        <MainTitle>
            <h1>SHARENERGY 2023</h1>
        </MainTitle>

        </ContainerHeader>
    )
}

export default Header
import { useEffect, useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { GlobalContext } from "../../context/GlobalContext"
import { RandomUser_Url } from "../../constants/BASE_URL"
import Header from "../../components/Header/Header"
import  CardUser from "../../components/CardUser/CardUser"
import { MainContainer, InputSearch, MainShowCard, BoxPage } from "../../constants/stylePageGlobal"
import { goToHomePagePage, goToLoginPage } from "../../routes/coordinator"

function HomePage (){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const params = useParams()
    const [search, setSearch] = useState("") 
    const [numbMin, setNumbMin] = useState(0) 
    const [perPage,setPerPage] = useState(20) 
    const [lastPage, setLastPage] = useState(1) 
    const [pageNumber, setPageNumber] = useState(1) 
    const [numberCard, setNumberCard] = useState('') 
    const startPage = (pageNumber * perPage)-21 
    const endPage = startPage + perPage 


        const handlePageTurn = (value)=>{
        if(value === 0){
            setPageNumber(1)
            setNumbMin(0)
            goToHomePagePage(navigate,1)
        }else if(value === lastPage){
            setPageNumber(lastPage)
            setNumbMin((lastPage -1)*perPage)
            goToHomePagePage(navigate,lastPage)
        }else{
            setPageNumber((pageNumber + value))
            setNumbMin(((pageNumber + value)-1)*perPage)
            goToHomePagePage(navigate,pageNumber+value)
        }
    }
    
    useEffect(()=>{
        if(params.results){
            setNumbMin(Number(params.results)*perPage)
            setPageNumber(Number(params.results))
        }
    },[])
    
    console.log('params', params)
    useEffect(()=>{
        browserUsers()
    },[pageNumber])

     useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(!context.auth){
            if(!token){
        goToLoginPage(navigate) 
        }
         }        
    },[])

     const browserUsers = async()=>{
        // se existir usuários na base, a função será encerrada
        if(context.users.length > 1){
            return
        }       
        try{
            context.setLoading(true)
            const response = await axios.get(`${RandomUser_Url}/?results=5000`)
            const auxUser = [...response.data.results]
            setLastPage(Math.ceil(response.data.info.results / perPage))
            setNumberCard(response.data.info.results)
            context.setUsers(auxUser)
            context.setLoading(false)
        }catch(error){
            console.log(`Erro! ${error.data.name} não foi adicionado a base`)
            console.log(error)
            context.setLoading(false)
        }
    }

    return(
        <>
        <Header/>
        
        <MainContainer>

            <InputSearch>
                <input value={search} onChange={(event)=>setSearch(event.target.value)}placeholder="Pesquisar usuário"/>
                <p>Usuários {numberCard}</p>             
            </InputSearch>
            
            <MainShowCard>
                {context.loading ? 
                'Carregando' 
                : 
                search !== ''? 
                context.users && context.users?.filter((user)=>
                user.email.includes(search) || user.name.first.includes(search) || user.login.username.includes(search))
                .map((user) => (<CardUser
                    user={user}/>)
                )  
                :
                context.users && context.users?.filter((client, i)=> i > startPage && i <= endPage)
                .map((user) => (<CardUser
                user={user}/>)
                )}
            </MainShowCard>

            <BoxPage pageNumber={pageNumber} lastPage={lastPage}>
                {pageNumber !== 1 && <button onClick={()=>handlePageTurn(0)}>{"<<"}</button>
                }{pageNumber - 2 > 0 && <button onClick={()=>handlePageTurn(-2)}>{pageNumber - 2}</button>
                }{pageNumber - 1 > 0 && <button onClick={()=>handlePageTurn(-1)}>{pageNumber - 1}</button>}
                 <button>{pageNumber}</button>                   
                {pageNumber + 1 < lastPage && <button onClick={()=>handlePageTurn(1)}>{pageNumber + 1}</button>
                }{pageNumber + 2 < lastPage && <button onClick={()=>handlePageTurn(2)}>{pageNumber + 2}</button>
                }{pageNumber !== lastPage < lastPage && <button onClick={()=>handlePageTurn(lastPage)}>{">>"}</button>
            }
            </BoxPage>   

        </MainContainer>
        </>
    )
}

export default HomePage
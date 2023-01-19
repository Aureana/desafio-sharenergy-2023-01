
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from "../../routes/coordinator" 
import { GlobalContext } from '../../context/GlobalContext'
import {MainContainer, BoxLogin} from "./styleLoginPage"


function LoginPage (){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        login: "",
        password: "",
    }) 
    const [validatePass, setValidatePass] = useState(false)
    const [checkBox, setCheckBox] = useState(false) //variavel que ativa o checkbox de Lembre-me.

    //que ativa o login
    const login = ()=>{
        if(form.login === 'desafiosharenergy' && form.password === 'sh@r3n3rgy'){        
            if(checkBox){
            const tokenrandomapi = JSON.stringify(form)
            window.localStorage.setItem("tokenrandomapi", tokenrandomapi)
            setCheckBox(false)
            }
            setValidatePass(false)
            context.setAuth(true)
            goToHomePage(navigate)
        }else{
            setValidatePass(true)
        }      
    }
    
    const onChangeCheckBox = (event)=>{
        const auxCheckBox = !checkBox
        setCheckBox(auxCheckBox)
    }
   
    const onChangeForm = (event)=>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    // redireciona a Home Page, se ativado o "lembre-me" quando logou
    useEffect(()=>{
        const token = JSON.parse(window.localStorage.getItem("tokenrandomapi")) 
        if(token){
        goToHomePage(navigate) 
         }        
    },[])

    
    return (
        <>
        <MainContainer>
            <BoxLogin validate={validatePass}>

                <div>
                    <h2>LOGIN</h2>
                    <p>Preencha os campos com seus dados de Login</p>
                </div>

                <div>
                        <input value={form.login} name="login" onChange={onChangeForm} placeholder="Insira seu e-mail"/>
                        <input value={form.password} name="password" onChange={onChangeForm} type='password' placeholder="Insira sua senha"/>
                        {validatePass ? <p className='errorLogin'>E-mail ou senha incorreto!</p> : ''}
                        <button onClick={()=>login()}>Login</button>

                        <div className="rememberme">
                            <input type="checkbox" name="rememberme" value={checkBox} onChange={onChangeCheckBox}/>
                            <label for="rememberme">Lembre-me!</label>
                        </div> 
                </div>
            </BoxLogin>
        </MainContainer>
        </>
    )
}

export default LoginPage
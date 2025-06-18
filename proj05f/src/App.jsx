import React, {useState} from "react"
import styled from "styled-components" 
import axios from "axios"

const FormModel = styled.form`
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  width: 420px; 
`

const startData = {name: "", email: "", password: "", birthday: ""}
const [datas, defineDatas] = useState(startData)

function Change(event){
  const valor = event.target.value
  const field = event.taget.name
  defineDatas({...datas, [field]: valor})
}

async function Add(event){
  event.preventDefault()
  await axios.post("https://localhost:4000/", datas)
  defineDatas(startData)
}

export default function Start() {
  return <FormModel onSubmit={Add}>
    <input value={datas.user}
    onChange={change}
    type="text" name="name" placeholder="Name" required/>

    <input value={datas.email}
    onChange={change}
    type="email" name="email" placeholder="Email@mail.com" required/>

    <input value={datas.password}
    onChange={change}
    type="password" name="password" placeholder="******" required/>

    <input value={datas.birthday}
    onChange={change}
    type="date" name="birthday" required/>
    
    <input type="submit" value="Register"/>
  </FormModel>
}
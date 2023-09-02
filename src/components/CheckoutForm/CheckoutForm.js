import { useState } from "react";

const CheckoutForm = ({onConfirm})=>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleConfirm = (event) =>{
        event.preventDefault()
        const userData ={
            name, phone , email
        }
        onConfirm(userData)
    }
    return(
        <div className="container is-flex is-justify-content-center is-align-items-center">
            <form onSubmit={handleConfirm}>
            <div className="field">
  <label className="label">nombre</label>
  <div className="control">
    <input type='text' className="input is-medium is-fullwidth" value={name} onChange={({target}) =>setName(target.value)}/>
  </div>
</div>

<div className="field">
  <label className="label">telefono</label>
  <div className="control">
    <input type='number' className="input is-medium is-fullwidth"  value={phone} onChange={({target}) =>setPhone(target.value)}/>
  </div>
</div>

<div className="field">
  <label className="label">correo</label>
  <div className="control">
    <input type='email' className="input is-medium is-fullwidth"  value={email} onChange={({target}) =>setEmail(target.value)}/>
  </div>
</div>


                <div>
                    <button className="button is-danger is-rounded" type="submit">Crear orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm

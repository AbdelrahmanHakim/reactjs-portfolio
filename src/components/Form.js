import React,{useState} from 'react'
import './form.css'
import emailjs from 'emailjs-com';

const Form = () =>{


    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
  });

   function handleSubmit(e){
        e.preventDefault();

        const service_id="default_service";
        const template_id="template_4vPRHO4Q";
        const user_id = "user_jNak70tQqub3tvq81OM6S";
        emailjs.send(service_id,template_id,values,user_id)
        .then((res)=>{
            alert('Thank you for your Message, we will get back to you soon!!');

        },(err)=>{
            console.log(err.message)
        })
        setValues({name:'',
        email:'',
        message:''});
       
   }

   function handleName(e){
       setValues({...values,name:e.target.value})
    
   }
   function handleEmail(e){
    setValues({...values,email:e.target.value})
   
    }
    function handleMessage(e){
    setValues({...values,message:e.target.value})
   
    }

    return <section className="contact-form" id="contact">
        
 
         <div className="form-heading">
            <h2>Contact</h2>
        </div>
        <div className="form">
        <form>
    <input 
        placeholder="Name"
        type="text"
        name="name"
        value= {values.name}
        required
        onChange={e=>handleName(e)}
        /> <br />
    <input 
        placeholder="Email"
        type="text"
        name="email"
        value= {values.email}
        required
        onChange={e=>handleEmail(e)}
        
        /><br />
    <textarea
        placeholder="Message" 
        type="text"
        value= {values.message}
        name="message"
        required
        onChange={e=>handleMessage(e)} /><br />
    <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
        </div>
     
    </section>
}

export default Form;
  import { useState } from 'react';
  import './account-css.css';
  import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';


  const Connecter = () => {
    const [username, setUsername] = useState('');


    return (
      <div className='connecter'>
          <h2>Se connecter</h2>
            <div className='text-accedez'>Accèdez à votre compte</div>
            <Form className='connecter-block'>
            <TextField name="username" type="text" isRequired>
                <Label>Nom d’utilisateur</Label>
                <Input value={username}  onChange={(e) => setUsername(e.target.value)}/>
                <FieldError />
            </TextField>

            <TextField name="email" type="email" isRequired>
                <Label>Mot de passe</Label>
                <Input />
                <FieldError />
            </TextField>
            
            <Button type="submit">Valider</Button>
        </Form>
     </div>



      // <div className='connecter-block'>
      //   <h2>Page Connecter si Déjà client ?!</h2>
      //   <form  c>
      //     <div className='form-container'>
      //       {/* <label>Username</label> */}
      //       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
      //     </div>
      //     {/* <div>
      //       <label>Email:</label>
      //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      //     </div> */}
      //     <button type="submit">Se connecter</button>
      //   </form>
      // </div>
    );
};
  
  
export default Connecter;
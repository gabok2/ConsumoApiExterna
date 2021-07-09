import axios from 'axios';
import express,{Request, Response,} from "express";

const routes = express.Router();

 const teste = [];

routes.post('/login/',async(req:Request,res:Response) => { 
  const {email, password} =req.body
  const login = await axios.post('https://api.app.amachains.io/login',{
      email:email,
      password:password
  });
  const {token}=login.data;

  teste.push(token);
  res.send(login.data);
  

});

routes.get('/coffees/',async(request:Request,response:Response) => {

  try{
    const { token } = request.headers;

    const testetoken = teste.find((testetoken) => testetoken.token === token);
  
    //if (!testetoken) return response.status(400).json({ error: "Customer not found" });
     const coofe =await axios.get('https://api.app.amachains.io/coffees',{
       headers:{
        Authorization: `Bearer ${JSON.stringify(testetoken)}`
       }
       
     });
  
    
  
    response.json(coofe);

  }catch(error){
    console.log(error);
  }

});

console.log(teste);

export {routes};

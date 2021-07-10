import axios from 'axios';
import express,{Request, Response,} from "express";

const routes = express.Router();



routes.post('/login/',async(req:Request,res:Response) => { 
  const {email, password} =req.body
  const login = await axios.post('https://api.app.amachains.io/login',{
      email:email,
      password:password
  });
  
  res.send(login.data);
  

});


routes.get('/coffees/', async (request: Request, response: Response) => {
  try {
    const { token } = request.headers;

    const { data } = await axios.get('https://api.app.amachains.io/coffees', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json(data);
  } catch (error) {
    console.log(error);
  }
});
export {routes};

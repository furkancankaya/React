import React from 'react';
import { Form, FormGroup, Label, Input ,Card, CardImg, CardFooter} from 'reactstrap';


function Login({login}){
    return(
        <div>

            <Card>
                <CardImg top width="25" height="230" src="/images/login.jpg" alt="Card image cap" />
                <CardFooter>
                <Form>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="user@gmail.com" value={login.email} />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="***************" value={login.password} />
                </FormGroup>
            </Form>
                </CardFooter>
            </Card>
            
            
        </div>
    
    );
}

export default Login;

 import React, { useState } from "react";
              import * as Components from './Components';
              
              function App() {
                const [signIn, setSignIn] = useState(true);
                const [email, setEmail] = useState('');
                const [password, setPassword] = useState('');
              
                const handleSignIn = (e) => {
                  e.preventDefault();
              
                  // Make a request to the server for login validation
                  // You can use Axios or the built-in fetch API for making the request
                  // Example using fetch:
                  fetch('/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      email: email,
                      password: password
                    })
                  })
                    .then(response => response.json())
                    .then(data => {
                      // Handle the response from the server
                      // You can redirect to a different page or show an error message based on the response
                      console.log(data);
                    })
                    .catch(error => {
                      // Handle any errors that occur during the request
                      console.error(error);
                    });
                };
              
                const handleSignUp = (e) => {
                  e.preventDefault();
              
                  // Make a request to the server for sign up validation
                  // Similar to the handleSignIn function, you can make an HTTP request to the server for sign up validation
                  // Implement the necessary logic based on your server-side implementation
                };
              
                return (
                  <Components.Container>
                    <Components.SignUpContainer signinIn={signIn}>
                      <Components.Form onSubmit={handleSignUp}>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input
                          type='text'
                          placeholder='Name'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                          type='email'
                          placeholder='Email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                          type='password'
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Button type='submit'>Sign Up</Components.Button>
                      </Components.Form>
                    </Components.SignUpContainer>
              
                    <Components.SignInContainer signinIn={signIn}>
                      <Components.Form onSubmit={handleSignIn}>
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input
                          type='email'
                          placeholder='Email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                          type='password'
                          placeholder='Password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button type='submit'>Sign In</Components.Button>
                      </Components.Form>
                    </Components.SignInContainer>
              
                    <Components.OverlayContainer signinIn={signIn}>
                      <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                          <Components.Title>Welcome Back!</Components.Title>
                          <Components.Paragraph>
                            To access the services of the college office, please login here
                          </Components.Paragraph>
                          <Components.GhostButton onClick={() => setSignIn(true)}>
                            Sign In
                          </Components.GhostButton>
                        </Components.LeftOverlayPanel>
              
                        <Components.RightOverlayPanel signinIn={signIn}>
                          <Components.Title>Hello, Student!</Components.Title>
                          <Components.Paragraph>
                            Enter the details to create your own account
                          </Components.Paragraph>
                          <Components.GhostButton onClick={() => setSignIn(false)}>
                            Sign Up
                          </Components.GhostButton>
                        </Components.RightOverlayPanel>
                      </Components.Overlay>
                    </Components.OverlayContainer>
                  </Components.Container>
                );
              }
              
              export default App;
              

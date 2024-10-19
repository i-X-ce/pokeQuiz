function handleCredentialResponse(response: { credential: string; }){
    console.log("Encoded JWT ID token: " + response.credential);
}
import { MainContainer, LoginSide, LoginForm, Label, PasswordLabel, ImageSide, Image, ErrorMessage } from "./LoginScreen.styles";

export function LoginScreen() {
  const handleSubmit = () => {
    alert(`E-mail: ${document.getElementById('mail').value}\r\nSenha: ${document.getElementById('password').value}`)
  };

  return (
    <MainContainer>
      <LoginSide>
        <img src="/src/assets/img-logo.svg" alt="" />
        <LoginForm>
          <h1>Acesse a Plataforma</h1>
          <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="mail">E-mail</Label>
            <input id="mail" type="text" placeholder="Digite seu e-mail" />
            <ErrorMessage>Digite um e-mail válido</ErrorMessage>
            <PasswordLabel>
              <Label htmlFor="password">Senha</Label>
              <span>Esqueceu a senha?</span>
            </PasswordLabel>
            <input id="password" type="password" placeholder="Digite sua senha" />
            <button type="submit" >Entrar</button>
          </form>
          <p>Ainda não tem uma conta? <span>Inscreva-se</span></p>
        </LoginForm>
      </LoginSide>
      <ImageSide>
        <Image />
      </ImageSide>
    </MainContainer>
  )
}
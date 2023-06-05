import { MainContainer, LoginSide, ContentBox, LoginForm, Label, PasswordLabel, ImageSide, Image } from "./LoginScreen.styles";

export function LoginScreen() {
  const handleSubmit = () => {
    alert(`E-mail: ${document.getElementById('mail').value}\r\nSenha: ${document.getElementById('password').value}`)
  };

  return (
    <MainContainer>
      <LoginSide>
        <ContentBox>
          <div>
            <img src="/src/assets/img-logo.svg" alt="" />
          </div>
          <LoginForm>
            <h1>Acesse a Plataforma</h1>
            <p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
            <form onSubmit={handleSubmit}>
              <Label htmlFor="mail">E-mail</Label>
              <input id="mail" type="text" placeholder="Digite seu e-mail" />
              <PasswordLabel>
                <Label htmlFor="password">Senha</Label>
                <span>Esqueceu a senha?</span>
              </PasswordLabel>
              <input id="password" type="password" placeholder="Digite sua senha" />
              <button type="submit" >Entrar</button>
            </form>
            <p>Ainda não tem uma conta? <span>Inscreva-se</span></p>
          </LoginForm>
        </ContentBox>
      </LoginSide>
      <ImageSide>
        <Image />
      </ImageSide>
    </MainContainer>
  )
}
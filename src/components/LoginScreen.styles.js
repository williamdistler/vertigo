import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  height: 100vh;
`

export const LoginSide = styled.div`
  width: 50vw;
  padding-left: 112px;
  padding-top: 47.15px;

  img {
    padding-bottom: 121.51px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 40px;
  }
  
  span {
    color: #7C3AED;
    cursor: pointer;
    font-weight: 600;
    margin-left: auto;
    margin-top: 8px;
  }

  span:hover {
    text-decoration: underline;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 53px;
      padding: 16px 12px;
      border: 1px solid #E2E8F0;
      border-radius: 4px;

      &:hover,
      &:focus {
        outline: 1px solid #7C3AED;
      }

      &:disabled {
        border: 1px solid #E2E8F0;
        background-color: #F8FAFC;
        &:hover, &:focus {
          outline: none;
        }
      }
    }

    button {
      padding: 16px 24px;
      background: #7C3AED;
      border-radius: 4px;
      border: none;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    button:hover {
      background-color: #9F67FF;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1366px) {
    padding-left: 56px;
    padding-top: 23.57px;

    img {
      padding-bottom: 60.75px;
    }

    p {
      margin-top: 8px;
      margin-bottom: 20px;
    }
  }
`

export const ErrorMessage = styled.p`
  display: none;
  color: #ED3A5A;
  font-size: 13px;
`

export const LoginForm = styled.div`
  max-width: 369px;
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;
  margin-top: 8px;
`
export const PasswordLabel = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageSide = styled.div`
  flex: 1;
  position: relative;
  background-color: #7C3AED;
`
export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/image.jpg');
  background-size: cover;
  opacity: 0.5;
`

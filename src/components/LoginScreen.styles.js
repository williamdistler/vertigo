import styled from "styled-components"

export const MainContainer = styled.main`
  display: flex;
  height: 100vh;
`

export const LoginSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  /* padding-left: 7rem;
  padding-top: 2.947rem; */

  img {
    /* padding-bottom: 7.594rem; */
  }

  p {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
  
  span {
    color: #7C3AED;
    cursor: pointer;
    font-weight: 600;
    margin-left: auto;
  }

  span:hover {
    text-decoration: underline;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 1rem;
      height: 3.313rem;
      padding: 1rem 0.75rem;
      border: 0.063rem solid #E2E8F0;
      border-radius: 0.25rem;

      &:hover,
      &:focus {
        outline: 0.25rem solid #7C3AED;
      }

      &:disabled {
        border: 0.25rem solid #E2E8F0;
        background-color: #F8FAFC;
        &:hover, &:focus {
          outline: none;
        }
      }
    }

    button {
      padding: 1rem 1.5rem;
      background: #7C3AED;
      border-radius: 0.25rem;
      border: none;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    button:hover {
      background-color: #9F67FF;
      cursor: pointer;
    }
  }
`

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;
  max-height: 47rem;
  width: fit-content;

  div {
    /* width: 100%; */
  }
`

export const ErrorMessage = styled.p`
  color: #ED3A5A;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

export const LoginForm = styled.div`
  /* padding-right: 13rem; */
  width: 24rem;
  height: 30rem;
`

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.313rem;
  margin-bottom: 0.5rem;
`
export const PasswordLabel = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageSide = styled.div`
  width: 50vw;
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

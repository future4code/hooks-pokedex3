import styled from "styled-components";

export const CustomHeader = styled.div`
  width: 100%;
  height: 6rem;
  background-color: red;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px gray;

  h1 {
    padding-right: 50px;
  }

}

`;


export const LogoBackground = styled.img`
  width: 12rem;
  height: 6.4rem;
  padding-left: 6.6rem;
   
`;

export const Menu = styled.div`
  display: flex;
  margin-right: 6.6rem;
  p {
    padding: 50px;
    font-size: 25px;
  }

`;

export const ButtonHeader = styled.button`
  width: 7rem;
  height: 2rem;
  font-size: 1rem;
  margin-left: 20px;
  border: none;
  border-radius: 10px;
  background: #ffd700;

  :hover {
    opacity: 0.6;
  }
`;

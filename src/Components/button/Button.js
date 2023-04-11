import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
  props.variant === "outlined" ? "#ffffff" : "#4caf50"};
  color: ${(props) => (props.variant === "outlined" ? "#4caf50" : "#ffffff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
    props.variant !== "outlined" ? "#ffffff" : "#4caf50"};
    color: ${(props) => (props.variant !== "outlined" ? "#4caf50" : "#ffffff")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({ type: "submit" })`
  box-shadow: 0 9px #999;
  &:active {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "#ffffff" : "#4caf50"};
    box-shadow: 0 9px #999;
    transform: translateY(4px);
  }
`;


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const AnimatedLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 20s linear;
`


export const DarkButton = styled(StyledButton)`
    border: 2px solid ${(props)=> props.theme.dark.primary};
    background-color: ${(props)=> props.theme.dark.primary};
    color: ${(props)=> props.theme.dark.text}
`

export const LightButton = styled(StyledButton)`
    border: 2px solid ${(props)=> props.theme.light.primary};
    background-color: ${(props)=> props.theme.light.primary};
    color: ${(props)=> props.theme.light.text}
`

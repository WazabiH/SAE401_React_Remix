import styled from "styled-components";

interface FullButtonProps {
  title: string;
  action?: () => void;
  border?: boolean;
}

export default function FullButton({ title, action, border }: FullButtonProps) {
  return (
    <ButtonWrapper
      className="animate pointer radius8"
      onClick={action}
      $border={border}
    >
      {title}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ $border?: boolean }>`
  border: 1px solid ${(props) => (props.$border ? "#7b151a" : "#CD212A")};
  background-color: ${(props) => (props.$border ? "transparent" : "#CD212A")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.$border ? "#7b151a" : "#fff")};
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: ${(props) =>
      props.$border ? "transparent" : "#7b151a"};
    border: 1px solid #7b151a;
    color: ${(props) => (props.$border ? "#CD212A" : "#fff")};
  }
`;

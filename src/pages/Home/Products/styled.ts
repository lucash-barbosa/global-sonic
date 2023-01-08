import styled from 'styled-components';

type Props = {
  background: string;
}

//wide

export const WideProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 570px;
  padding: 0 20% 25px 3%;
  height: 232px;
  border-radius: 5px;
  background: url(${({background}: Props) => background});
`;

export const SmallProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 270px;
  height: 232px;
  padding: 0 5% 25px 2%;
  border-radius: 5px;
  background: url(${({background}: Props) => background});
`;
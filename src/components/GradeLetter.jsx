import styled from 'styled-components';

const CircleGrade = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.height}px;
  width: ${props => props.height}px;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: white;
  font-weight: 800;
  line-height: 0;
  font-size: ${props => props.height * 0.7}px;
`;

const LetterGrade = styled.div`
  text-align: center;
  height: ${props => props.height}px;
  width: ${props => props.height}px;
  color: ${props => props.color};
  font-weight: 800;
  font-size: ${props => props.height * 0.7}px;
`;

export { CircleGrade, LetterGrade };

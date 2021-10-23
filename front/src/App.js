import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 50px;
  margin: 0 auto;
`;

const QuestionCard = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IsShowButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 2px 10px;
`;

const dummyData = [
  {
    id: 1,
    question: '성왕은 도읍을 *로 옮기고, 국호를 *로 바꾸었다.',
    answer: ['사비', '남부여'],
    isShow: false,
  },
  {
    id: 2,
    question: '신라의 왕호는 * → * → * → * → 왕으로 변하였다.',
    answer: ['거서간', '차차웅', '이사금', '마립간'],
    isShow: false,
  },
  {
    id: 3,
    question: '신라의 *은 국방부에 해당하는 *를 설치하였다.',
    answer: ['법흥왕', '병부'],
    isShow: false,
  },
];

function App() {
  const [questionList, setQuestionList] = useState(dummyData);

  const onMouseEnterHandler = (id) => {
    setQuestionList(
      questionList.map((q) => (q.id === id ? { ...q, isShow: true } : q)),
    );
  };

  const onMouseLeaveHandler = (id) => {
    setQuestionList(
      questionList.map((q) => (q.id === id ? { ...q, isShow: false } : q)),
    );
  };

  return (
    <Container>
      {questionList.map((q) => (
        <QuestionCard key={q.id}>
          {q.isShow
            ? q.answer
            : q.question.replaceAll('*', '(\u00A0\u00A0\u00A0)')}
          <IsShowButton
            onMouseEnter={() => onMouseEnterHandler(q.id)}
            onMouseLeave={() => onMouseLeaveHandler(q.id)}
          >
            보기
          </IsShowButton>
        </QuestionCard>
      ))}
    </Container>
  );
}

export default App;

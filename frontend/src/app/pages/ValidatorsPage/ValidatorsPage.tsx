import { styled } from '../../../styles'
import { ValidatorsCard } from '../../components/Validators/Card/ValidatorsCard.tsx'
import { PageLayout } from '../../UIkit'
import { Title } from '../../UIkit/PageLayout/Title/Title.tsx'

const validatorsData = [{
  img: 'https://bit.ly/sage-adebayo',
  name: 'Vatset Maria',
  countProjects: '123',
  rang: 'S',
}, {
  img: 'https://bit.ly/sage-adebayo',
  name: 'Aleksey Levin',
  countProjects: '100',
  rang: 'A',
}, {
  img: 'https://bit.ly/sage-adebayo',
  name: 'Ivan Baykov',
  countProjects: '43',
  rang: 'B',
},,
  {
    img: 'https://bit.ly/sage-adebayo',
    name: 'Trofimov Andrei',
    countProjects: '4',
    rang: 'C',
  }]

const StyledValidatorsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  padding: '32px 0',
  gap: '32px',
})

export const ValidatorsPage = () => {
  return (
    <PageLayout>
      <Title>Validators</Title>
      <StyledValidatorsContainer>
        {validatorsData.map((item, index) => {
          return (
            <ValidatorsCard
              id={index.toString()}
              avatarUrl={item?.img}
              name={item?.name}
              countProjects={item?.countProjects}
              rang={item?.rang}
              key={index}
            />
          )
        })}
      </StyledValidatorsContainer>
    </PageLayout>
  )
}

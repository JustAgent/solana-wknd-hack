import { styled } from '../../../styles'
import { ValidatorsCard } from '../../components/Validators/Card/ValidatorsCard.tsx'
import { PageLayout } from '../../UIkit'
import { Title } from '../../UIkit/PageLayout/Title/Title.tsx'

const validatorsData = [{
  img: 'https://sun9-14.userapi.com/impg/p-1HWrchT6C7UTBA5eTE5tACLrMsHic0gTgg4g/9WiKTA7fwBc.jpg?size=720x658&quality=96&sign=9145262b637c48b90f8a055847cdb42b&type=album',
  name: 'Vatset Maria',
  countProjects: '123',
  rang: 'S',
}, {
  img: 'https://sun9-74.userapi.com/impg/YtCRwIdmov7T--qM4WKcScTpHOqjO_oj__-a1Q/xy1iK74Rtw4.jpg?size=1073x1080&quality=96&sign=e1d115a520a5404da05ef0fff8b26d6c&type=album',
  name: 'Aleksey Levin',
  countProjects: '100',
  rang: 'A',
}, {
  img: 'https://sun9-51.userapi.com/impg/GBspYXbs8d8oeS0B4-svL1vSr8RYeVcbXuuT3g/R_16JCTBl_0.jpg?size=960x1280&quality=96&sign=2486df18dc676a169154d7b95f075713&type=album',
  name: 'Ivan Baykov',
  countProjects: '43',
  rang: 'B',
},
{
  img: 'https://sun9-63.userapi.com/impg/moqqHBuDT3Mjgu9U1yDBpJMmSTrzRHpKbefJlw/8CGVkmhBt0s.jpg?size=640x640&quality=96&sign=496715cc195ab44dacc71fc52828fbb2&type=album',
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

import { Card, CardBody, Editable, EditablePreview } from '@chakra-ui/react';
import { CardInfo } from './App';
import AutoResizeTextarea from './AutoResizeTextarea';
import { ChangeEventHandler } from 'react';

const BoardCard = ({
  cardInfo,
  onBlur,
  onChange,
}: {
  cardInfo: CardInfo;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <Card w={'16em'} key={cardInfo.id}>
      {/* <CardHeader>{card.title}</CardHeader> */}
      <CardBody textAlign={'start'}>
        <Editable defaultValue={cardInfo.description}>
          <EditablePreview />
          <AutoResizeTextarea onBlur={onBlur} onChange={onChange} />
        </Editable>
      </CardBody>
    </Card>
  );
};

export default BoardCard;

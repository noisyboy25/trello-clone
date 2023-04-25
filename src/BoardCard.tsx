import { Card, Text, CardBody } from '@chakra-ui/react';
import { CardInfo } from './App';

const BoardCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <Card w={'16em'} key={cardInfo.id}>
      {/* <CardHeader>{card.title}</CardHeader> */}
      <CardBody textAlign={'start'}>
        <Text>{cardInfo.description}</Text>
      </CardBody>
    </Card>
  );
};

export default BoardCard;

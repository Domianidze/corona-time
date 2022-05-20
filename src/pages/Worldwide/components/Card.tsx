import NewCasesImg from 'assets/img/charts/new-cases.png';
import RecoveredImg from 'assets/img/charts/recovered.png';
import DeathImg from 'assets/img/charts/death.png';

const Card: React.FC<{
  title: 'New Cases' | 'Recovered' | 'Death';
  amount: string;
}> = (props) => {
  let graph;
  let bgColor;
  let textColor;

  if (props.title === 'New Cases') {
    graph = NewCasesImg;
    bgColor = 'bg-brand/primary';
    textColor = 'text-brand/primary';
  }

  if (props.title === 'Recovered') {
    graph = RecoveredImg;
    bgColor = 'bg-brand/secondary';
    textColor = 'text-brand/secondary';
  }

  if (props.title === 'Death') {
    graph = DeathImg;
    bgColor = 'bg-brand/teritary';
    textColor = 'text-brand/teritary';
  }

  return (
    <div
      className={`w-96 h-64 flex justify-center items-center flex-col ${bgColor} bg-opacity-10 rounded-2xl`}
    >
      <img src={graph} alt='graph' />
      <p className='py-3 text-xl font-medium'>{props.title}</p>
      <p className={`text-4.2xl font-black ${textColor}`}>{props.amount}</p>
    </div>
  );
};

export default Card;

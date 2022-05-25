import NewCasesImg from 'assets/img/charts/new-cases.png';
import RecoveredImg from 'assets/img/charts/recovered.png';
import DeathImg from 'assets/img/charts/death.png';

const Card: React.FC<{
  type: 'newCases' | 'recovered' | 'deaths';
  title: string;
  amount: string;
  className?: string;
}> = (props) => {
  let graph;
  let bgColor;
  let textColor;

  if (props.type === 'newCases') {
    graph = NewCasesImg;
    bgColor = 'bg-brand/primary';
    textColor = 'text-brand/primary';
  }

  if (props.type === 'recovered') {
    graph = RecoveredImg;
    bgColor = 'bg-brand/secondary';
    textColor = 'text-brand/secondary';
  }

  if (props.type === 'deaths') {
    graph = DeathImg;
    bgColor = 'bg-brand/teritary';
    textColor = 'text-brand/teritary';
  }

  return (
    <div
      className={`w-1/2 h-56 flex justify-center items-center flex-col ${bgColor} bg-opacity-10 rounded-2xl border-8 border-white md:w-96 md:h-64 ${props.className}`}
    >
      <img src={graph} alt='graph' />
      <p className='py-3 px-1 text-lg font-medium md:text-xl max-w-full break-words text-center'>
        {props.title}
      </p>
      <p className={`text-3xl font-black md:text-4.2xl ${textColor}`}>
        {props.amount}
      </p>
    </div>
  );
};

export default Card;

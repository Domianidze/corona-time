import SuccessImg from 'assets/img/icons/success-big.png';

const SendEmail = () => {
  return (
    <div>
      <div className='mb-14 flex justify-center items-center flex-col'>
        <img src={SuccessImg} alt='success' />
        <p className='py-3 text-lg'>We have sent you a confirmation email</p>
      </div>
    </div>
  );
};

export default SendEmail;

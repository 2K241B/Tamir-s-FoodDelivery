import { Button } from './ui/button';
import { Input } from './ui/input';

const styles = {
  container:'w-[448px] h-fit rounded-[16px] flex flex-col gap-[48px]  p-8 bg-white m-auto pt-[143px] pb-[107px]',
  header: 'text-[#0D1118] text-center text-[28px] font-bold',
  form: 'flex flex-col items-start gap-4 w-full text-sm',
  input:'w-full flex items-center justify-between border-[#ECEDF0] border-[0.5px] bg-[#F7F7F8] text-[#8B8E95] rounded-[4px] pr-3',
  inputContainer: 'flex flex-col gap-1 w-full text-sm',
  ButtonStyle1:'bg-[#EEEFF2] disabled:text-[#1C20243D] font-normal px-4 py-2  hover:bg-[#18BA51] text-white',
};

export const ForgetPass = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Нууц үг сэргээх</h2>
      <div className={styles.inputContainer}>
        <h3>Имэйл</h3>
        <Input placeholder="Имэйл хаягаа оруулна уу" className={styles.input} />
      </div>
      <Button className={styles.ButtonStyle1}>Үргэлжлүүлэх</Button>
    </div>
  );
};

export default ForgetPass;
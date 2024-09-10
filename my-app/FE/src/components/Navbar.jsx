import CartIcon from './icons/CartIcon';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import UserIcon from './icons/UserIcon';
import { Input } from './ui/input';

const styles = {
  container: 'min-w-[1440px] h-[57px] flex flex-row justify-center bg-white',
  subContainer: 'min-w-[1258px] px-6 py-2 flex justify-between items-center',
  sidesContainer: 'flex items-center gap-2',
  contentContainer:
    'flex items-center gap-2 text-sm font-bold leading-4 spacing-[0,2px] px-4 py-2',
  input:
    'flex items-center px-4 py-2 gap-2 h-10 w-[260px] border-[#8B8E95] border-[1px] rounded-[8px]',
};
const content = ['НҮҮР', 'ХООЛНЫ ЦЭС', 'ХҮРГЭЛТИЙН БҮС'];

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.sidesContainer}>
          <LogoIcon />
          <div className={styles.contentContainer}>
            {content.map((menuItems) => (
              <p className={styles.contentContainer}>{menuItems}</p>
            ))}
          </div>
        </div>
        <div className={styles.sidesContainer}>
          <div className={styles.input}>
            <SearchIcon />
            <Input className="border-0 h-fit" />
          </div>
          <div className={styles.contentContainer}>
            <CartIcon />
            <p>Сагс</p>
          </div>
          <div className={styles.contentContainer}>
            <UserIcon />
            <p>Нэвтрэх</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
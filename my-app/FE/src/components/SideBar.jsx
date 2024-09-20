import useFoods from '@/hooks/useFoods';
import { SideBarMenu } from "./SideBarMenu";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const AdminSideBar = () => {
  const { response } = useFoods();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  return (
    <div className='min-w-[402px] h-screen pl-[120px] py-[26px] pr-6 flex flex-col gap-10 bg-white'>
      <h2 className='text-[22px] font-bold'>Food menu</h2>
      <div className='flex flex-col gap-[26px]'>
        {response.length > 0 ? (
          response.map((categoryId) => (
            <Link href={{ pathname: 'admin', query: { categoryId: categoryId } }} key={categoryId}>
              <SideBarMenu isActive={categoryId === categoryParam}>
                {categoryId.name}
              </SideBarMenu>
            </Link>
          ))
        ) : (
          <div>No categories available.</div>
        )}
      </div>
    </div>
  );
};

export default AdminSideBar;

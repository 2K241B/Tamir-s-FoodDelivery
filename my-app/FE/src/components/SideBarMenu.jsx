import { EllipsisVertical } from 'lucide-react';

export const SideBarMenu = ({ children, isActive }) => {
    return (
      <div className={`p-2 w-[258px] flex justify-between rounded  ${isActive ? 'bg-green-600 text-white ' : 'border  border-gray-200'}`}>
        {children}
        <EllipsisVertical />
      </div>
  
    )
  }
'use client'
import NewPassword from '@/components/NewPassword'
import OTP from '@/components/OTP'
import EmailInput from  '../../components/EmialInput'


const Page = () => {
  return (
    <div>
      <EmailInput/>
      <OTP/>
      <NewPassword />
    </div>
  )
}

export default Page
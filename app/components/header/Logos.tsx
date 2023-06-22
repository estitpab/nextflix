import Image from 'next/image'
 
export function Logo() {
  return <Image className='min-w-[95px]' src="/logo.png" alt="Nextflix" width="95" height="27" />
}
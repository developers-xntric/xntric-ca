'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname?.startsWith('/studio')) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Navbar position="bottom" />
      <Footer />
    </>
  )
}

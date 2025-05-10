import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='py-4 border-b'>
      <nav className='container flex flex-wrap items-center justify-between gap-4'>
        {/* Brand and Navigation Links */}
        <div className='flex flex-wrap items-center gap-4 sm:gap-10 text-sm font-medium'>
          <Link href='/' className='font-serif text-lg font-semibold'>
            NeoChat
          </Link>
          <Link href='/chat'>Chat</Link>
        </div>

        {/* Right Side Controls */}
        <div className='flex items-center gap-4 sm:gap-6'>
          <ThemeToggle />

          <SignedOut>
            <SignInButton>
              <Button size='sm'>Sign in</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

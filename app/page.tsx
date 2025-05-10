import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-4 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:py-32'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-4 py-1.5 text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Introducing NeoChat with new features.{' '}
              <Link href='/' className='font-semibold text-emerald-600 relative z-10'>
                <span className='absolute inset-0' aria-hidden='true' />
                See what's new <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
              NeoChat - Simple, Secure Chat
            </h1>
            <p className='mt-4 text-base sm:text-lg md:text-xl leading-7 text-muted-foreground'>
              Experience lightning-fast messaging with end-to-end encryption. 
              NeoChat makes connecting with friends and colleagues effortless 
              with its clean interface and reliable performance.
            </p>
            <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6'>
              <Link
                href='/chat'
                className='w-full sm:w-auto text-center rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
              >
                Start Chatting
              </Link>
              <Link 
                href='/features' 
                className='text-sm font-semibold leading-6 text-emerald-600'
              >
                See Features <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

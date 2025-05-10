import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-2'>
      <div className='container'>
        <div className='mx-auto max-w-2xl py-32'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Introducing NeoCha 2.0 with new features.{' '}
              <Link href='/' className='font-semibold text-emerald-600'>
                <span aria-hidden='true' className='absolute inset-0' />
                See what's new <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
              NeoCha - Simple, Secure Chat
            </h1>
            <p className='mt-6 text-lg leading-8 text-muted-foreground'>
              Experience lightning-fast messaging with end-to-end encryption. 
              NeoCha makes connecting with friends and colleagues effortless 
              with its clean interface and reliable performance.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/chat'
                className='rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
              >
                Start Chatting
              </Link>
              <Link 
                href='/features' 
                className='text-sm font-semibold leading-6'
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
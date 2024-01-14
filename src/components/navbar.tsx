import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-x-4'>
        <li>
          <Link href='/about'>
            <p>About Me</p>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

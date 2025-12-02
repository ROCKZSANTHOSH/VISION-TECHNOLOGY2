import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Vision Technology | Education, Outsourcing, Freelancing',
  description: 'Robotics, Python, CCNA, Ethical Hacking, AI/ML training. Outsourcing and freelancing services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="brand">
            <Image src="/logo.svg" alt="Vision Technology" width={36} height={36} className="logo" />
            <Link href="/">Vision Technology</Link>
          </div>
          <div>
            <Link href="/courses">Courses</Link>
            <Link href="/outsourcing">Outsourcing</Link>
            <Link href="/freelancing">Freelancing</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/demo"><button className="btn">Free Demo</button></Link>
          </div>
        </nav>
        {children}
        <footer className="footer container">
          <div>Vision Technology © {new Date().getFullYear()}</div>
          <div>Founder: Santhosh Kottiswaran</div>
        </footer>
      </body>
    </html>
  )
}

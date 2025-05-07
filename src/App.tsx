import { useState } from "react"

type logoType = 'rockstar' | 'school' | 'cashboard';
export default function App() {
  const [logo, setLogo] = useState<logoType>('rockstar');
  return (
    <main>
      <div className="tab">
        <button data-active={logo === 'rockstar'} onClick={() => setLogo('rockstar')}>Rockstar</button>
        <button data-active={logo === 'school'} onClick={() => setLogo('school')}>School</button>
        <button data-active={logo === 'cashboard'} onClick={() => setLogo('cashboard')}>Cashboard</button>
      </div>
      <div className="container" data-logo={logo}>
        <div className="logo" />
        <div className="mask" />
      </div>
    </main>
  )
}

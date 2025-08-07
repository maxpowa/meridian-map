import { MeridianSystem } from './data/meridian'
import { UserInterface } from './components/UserInterface'
import { useSynchronizedPicklistSetting } from './hooks/useSynchronizedSetting'

const keys = Object.keys(MeridianSystem)

function App() {
  const system = useSynchronizedPicklistSetting<
    keyof typeof MeridianSystem
  >('system', keys as (keyof typeof MeridianSystem)[])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
      <UserInterface system={system}></UserInterface>
    </div>
  )
}

export default App

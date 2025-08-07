import { useThree } from '@react-three/fiber'
import { useControls, button } from 'leva'
import { createContext, useCallback, useContext, useEffect } from 'react'
import { GPSSystem, GPSBody } from '../util/gps'
import { getGPSValue } from './useSystemData'
import { type OrbitControls as OrbitControlsImpl } from 'three-stdlib'

const ScaleContext = createContext({
  coordScale: 0.001,
  textScale: 1,
})
export const useScale = () => useContext(ScaleContext).coordScale
export const useTextScale = () => useContext(ScaleContext).textScale
export const ScaleProvider = ScaleContext.Provider
export default ScaleContext

export function useScaledCameraSystem(system: GPSSystem) {
  const controls = useThree((state) => state.controls) as OrbitControlsImpl

  const [, set] = useControls('Focused Point of Interest', () => ({
    Information: {
      value: '',
      editable: false,
    },
    GPS: {
      value: '',
      editable: false,
    },
  }))

  const scale = useScale()

  const resetCamera = useCallback(() => {
    if (!controls) return
    if (system.name === 'Hel') {
      controls.object.position.set(0, 50000, 0)
      controls.target.set(0, 0, 0)
    }
    set({ Information: 'N/A', GPS: '' })

    const focus = getGPSValue('focus')
    if (focus) {
      const position = focus.clone().multiplyScalar(scale)
      controls.target = position
      const cameraPosition = position
        .clone()
        .add(
          controls.object.position
            .normalize()
            .multiplyScalar(
              (GPSBody.isBody(focus) ? focus.radius : 50000) * scale * 5,
            ),
        )
      controls.object.position.set(
        cameraPosition.x,
        cameraPosition.y,
        cameraPosition.z,
      )
      set({
        Information: `${focus.name} (${focus.category})`,
        GPS: focus.toString(),
      })
    }
    controls.update()
  }, [controls, set, system, scale])

  useEffect(resetCamera, [system.name, resetCamera, controls])

  useControls(
    {
      'Reset View': button(resetCamera),
    },
    [controls, system.name],
  )
}

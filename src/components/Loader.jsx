import { useProgress, Html } from '@react-three/drei'

// Renders loading progress when models are being loaded in
const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center>
      <span className='canvas-load'></span>
      <p style={{
        fontsize: 14,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
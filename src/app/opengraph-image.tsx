import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'
export const alt = `${siteConfig.name} - ${siteConfig.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #27272a',
            borderRadius: '16px',
            padding: '60px',
            background: 'rgba(255, 255, 255, 0.02)',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ fontSize: 80, fontWeight: 900, color: '#ffffff', letterSpacing: '0.1em', marginBottom: 20 }}>
            {siteConfig.name.toUpperCase()}
          </div>
          <div style={{ fontSize: 32, fontWeight: 400, color: '#10b981', letterSpacing: '0.2em', fontFamily: 'monospace' }}>
            {siteConfig.title.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}

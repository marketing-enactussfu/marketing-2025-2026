import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #111827 0%, #2563eb 100%)',
                    color: 'white',
                    fontSize: 28,
                    borderRadius: 12,
                }}
            >
                E
            </div>
        ),
        size
    )
} 
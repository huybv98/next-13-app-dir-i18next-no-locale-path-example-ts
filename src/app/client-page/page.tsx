'use client'

import Link from 'next/link'
import { useTranslation } from '@/locales/client'
import { useState } from 'react'

export default function Page() {
  const { t } = useTranslation('client-page')
  const [counter, setCounter] = useState(0)
  return (
    <>
      <main>
        <p>{t('counter', { count: counter })}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
        <Link href="/second-client-page">
          {t('to-second-client-page')}
        </Link>
        <Link href="/">
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
    </>
  )
}
import Image from 'next/image'
import { useTranslation } from '@/locales/index'
import { Trans } from 'react-i18next/TransWithoutContext'
import Link from 'next/link'

export default async function Home() {
  const { t } = await useTranslation()
  return (
      <main>
        {/*<Header heading={t('h1')} />*/}
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t('blog.link')}>blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')}>
            <img
                style={{ width: '50%' }}
                src="https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href="/client-page">
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
  )
}

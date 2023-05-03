'use client'

import Script from 'next/script'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import pageview from '@/lib/gtagHelper'

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = 'G-48H0RZ6Q73'
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    pageview(GA_MEASUREMENT_ID, url)
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return (
    <>
      <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });
                
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });`
        }}/>
    </>
  )
}

export default GoogleAnalytics

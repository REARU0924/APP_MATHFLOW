// app/providers.js
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { NextAppDirEmotionCacheProvider } from '@chakra-ui/next-js'

export function Providers({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'chakra' }}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </NextAppDirEmotionCacheProvider>
  )
}

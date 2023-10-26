import React, { useState, useEffect, useSyncExternalStore } from 'react'

export default function SyncStore () {
  // let now = new Date().toLocaleTimeString()
  // console.log('Im here')
  // setInterval(() => {
  //   console.log('hii')
  //   now = new Date().toLocaleTimeString()
  //   // notifier.forEach(notify => notify())
  // }, 1000)
  // const notifier = new Set()
  // let store = useSyncExternalStore(
  //   notify => {
  //     notifier.add(notify)
  //     return () => notifier.delete(notify)
  //   },
  //   () => now
  // )

  const subscribe = cb => {
    window.addEventListener('online', cb)
    window.addEventListener('offline', cb)
    return () => {
      window.removeEventListener('online', cb)
      window.removeEventListener('offline', cb)
    }
  }
  const snapshot = () => {
    return navigator.onLine
  }
  const isOnline = useSyncExternalStore(subscribe, snapshot)

  return (
    <div>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
      {/* <h2>{store}</h2> */}
    </div>
  )
}

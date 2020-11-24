/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export default function useMount(func) {
  useEffect(() => {
    typeof func === 'function' && func()
  }, [])
}

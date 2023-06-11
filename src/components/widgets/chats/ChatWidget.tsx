import { useQuery } from '@tanstack/react-query'
import { posthog } from 'posthog-js'
import React from 'react'

const fetchVisitors = async () => {
  const data = await fetch('https://app.posthog.com/api/users/@me', {
    headers: {
      Authorization: `Bearer phx_zg1qCtlSanOgL14gFo1VZr69MQtVq19yQEwMlesjBf4`
    }
  })
  const x = await data.json()
  return x
}

const ChatWidget = () => {
  const generatedVisitorsId = sessionStorage.getItem(
    'ph_phc_NyNxKAIaFxHp4MAXT8QdiA9QtjH1ZVDtP7mS4DKTCot_window_id'
  )
  console.log(generatedVisitorsId)
  return null
}

export default ChatWidget

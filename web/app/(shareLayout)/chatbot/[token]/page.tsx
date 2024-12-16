'use client'
import React from 'react'
import EmbeddedChatbot from '@/app/components/base/chat/embedded-chatbot'
import SwrInitor from '@/app/components/swr-initor'
import { CHATBOT_AUTH_DISABLED } from '@/config'

const Chatbot = () => {
  return CHATBOT_AUTH_DISABLED
    ? (
      <EmbeddedChatbot />
    )
    : (
      <SwrInitor>
        <EmbeddedChatbot />
      </SwrInitor>
    )
}

export default React.memo(Chatbot)

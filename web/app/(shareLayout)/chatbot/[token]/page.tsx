'use client'
import React from 'react'
import EmbeddedChatbot from '@/app/components/base/chat/embedded-chatbot'
import SwrInitor from '@/app/components/swr-initor'
import { CHAT_AUTH_REQUIRED } from '@/config'

const Chatbot = () => {
  return CHAT_AUTH_REQUIRED
    ? (
      <SwrInitor>
        <EmbeddedChatbot />
      </SwrInitor>
    )
    : (
      <EmbeddedChatbot />
    )
}

export default React.memo(Chatbot)

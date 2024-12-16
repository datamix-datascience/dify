'use client'
import React from 'react'
import ChatWithHistoryWrap from '@/app/components/base/chat/chat-with-history'
import SwrInitor from '@/app/components/swr-initor'
import { CHATBOT_AUTH_DISABLED } from '@/config'

const Chat = () => {
  return CHATBOT_AUTH_DISABLED
    ? (
      <ChatWithHistoryWrap />
    )
    : (
      <SwrInitor>
        <ChatWithHistoryWrap />
      </SwrInitor>
    )
}

export default React.memo(Chat)

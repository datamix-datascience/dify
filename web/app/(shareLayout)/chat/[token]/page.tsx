'use client'
import React from 'react'
import ChatWithHistoryWrap from '@/app/components/base/chat/chat-with-history'
import SwrInitor from '@/app/components/swr-initor'
import { CHAT_AUTH_REQUIRED } from '@/config'

const Chat = () => {
  return CHAT_AUTH_REQUIRED
    ? (
      <SwrInitor>
        <ChatWithHistoryWrap />
      </SwrInitor>
    )
    : (
      <ChatWithHistoryWrap />
    )
}

export default React.memo(Chat)

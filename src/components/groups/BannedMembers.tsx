import React from 'react'
import { CometChatBannedMembers } from '@cometchat/chat-uikit-react-native'
import { CometChat } from '@cometchat/chat-sdk-react-native'

export const BannedMembers = (props) => {

    let group: CometChat.Group = {
        "guid": "123456",
        "name": "test group",
        "type": "public",
        "scope": "admin",
        "membersCount": 4,
        "joinedAt": 1684922261,
        "conversationId": "group_123456",
        "hasJoined": true,
        "createdAt": 1684922167,
        "owner": "app_system",
        "updatedAt": 1692359149,
        "onlineMembersCount": 43
    }

    return (
        <CometChatBannedMembers group={group} onBack={() => props.navigation.goBack()} />
    )
}

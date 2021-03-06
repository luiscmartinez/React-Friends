import React from 'react'

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div key={friend.first_name + friend.last_name}>
            {friend.first_name} {friend.last_name}
          </div>
        )
      })}
    </div>
  )
}
export default FriendsList

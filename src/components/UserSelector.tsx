import React, { FC } from 'react';
import { UsersType } from '../config/types';

interface UserSelectorProps {
  currentUser: string;
  users: UsersType;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserSelector: FC<UserSelectorProps> = ({
  currentUser = '',
  users = {},
  onChange,
}: UserSelectorProps) => {
  return (
    <h2 className="mb-4">Je suis
      <select id="user" name="user"
        className="custom-select custom-select-lg" value={currentUser}
        onChange={onChange}>
        <option value="">...</option>
        {
          Object.keys(users).map((user, key) => {
            const upcaseUser = user.charAt(0).toUpperCase() + user.slice(1);
            return (
              <option key={user} value={user}>{upcaseUser}
                {
                  (users && users[user] && users[user].profile && users[user].profile.emoji)
                    ? users[user].profile.emoji
                    : null
                }
              </option>
            );
          })
        }
      </select>
    </h2>
  );
}

export default UserSelector;

import React, { FC } from 'react';
import config from '../config';

interface UserSelectorProps {
  currentUser: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserSelector: FC<UserSelectorProps> = ({
  currentUser = '',
  onChange,
}: UserSelectorProps) => {
  return (
    <h2 className="mb-4">Je suis
      <select id="user" name="user"
        className="custom-select custom-select-lg" value={currentUser}
        onChange={onChange}>
        <option value="">...</option>
        {
          Object.keys(config.users).map((user, key) => {
            const upcaseUser = user.charAt(0).toUpperCase() + user.slice(1);
            return (
              <option value={user}>{upcaseUser} {config.users[user].profile.emoji}</option>
            );
          })
        }
      </select>
    </h2>
  );
}

export default UserSelector;

import React from 'react';
import styles from './UserProfile.module.sass'

const UserProfile = () => {
  // Начальные данные пользователя
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    bio: 'Разработчик программного обеспечения из Москвы.',
  };

  return (
    <div className={styles.userProfile}>
      <h2>Профиль пользователя</h2>
        <div>
          <p><strong>Имя:</strong> {user.name}</p>
          <p><strong>Электронная почта:</strong> {user.email}</p>
          <p><strong>Биография:</strong> {user.bio}</p>
        </div>
    </div>
  );
};

export default UserProfile;
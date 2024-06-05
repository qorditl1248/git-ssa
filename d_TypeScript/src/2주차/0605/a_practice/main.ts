{
  /* tsc main 실행
    - 동적으로 만들거
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  */

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  type Users = User[];

  const fetchUsers = async (): Promise<Users> => { // user에 담겨있는 값만 가져옴
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const users: Users = await response.json(); // promis<User>가 users에 담김 
      return users;

    } catch(error) {
      console.error('Fetch error: ', error);
      return [];
    }
  }

  const createUserCard = (user: User): HTMLElement => {
    const userCard = document.createElement('div'); // div를 동적으로 생성 
    userCard.className = 'user-card';
    userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    `;

    return userCard;
  }

  const displayUsers = (users: Users): void => {
    const userList = document.getElementById('user-list');

    if(userList) {
      userList.innerHTML = '';
      users.forEach((user) => {
        // const userCard =  document.getElementById('user-card'); 밑에 로직이랑 똑같음 
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      })
    }
  }

  const addEventListeners = (): void => {
    const fetchUsersButton = document.getElementById('fetch-users');
    if(fetchUsersButton) {
      fetchUsersButton.addEventListener('click', async () => {
        const users = await fetchUsers();
        displayUsers(users);
      })
    }
  }

  const init = ():void => {
    addEventListeners();
  }

  document.addEventListener('DOMContentLoaded', init);

}

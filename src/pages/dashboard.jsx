import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';


const Dashboard = () => {

  const [users, setUsers] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();

  //console.log('session', session); 

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.replace('/login');
    }
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();

  }, [session, status, router]);

  console.log(users);

  return (
    <div className="dashboard container">
      <h1>Dashboard</h1>
      <>
        {session &&
          <div>
           <p>Welcome, {session.user.name}!</p>
           <button onClick={() => signOut({ callbackUrl: '/login' })} className="logout-btn">
             Logout
           </button>
   
           <div className="users-container">
             <h1 className="title">User List</h1>
             <div className="users-list">
               {users.map((user) => (
                 <div className="user-card" key={user.id}>
                   <h2 className="user-name">{user.name}</h2>
                   <p className="user-email">{user.email}</p>
                   <p className="user-phone">{user.phone}</p>
                 </div>
               ))}
             </div>
           </div>
           </div>
        }
       

      </>

    </div>
  );
};

export default Dashboard;

import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-record">My Record</Link>
          </li>
          <li>
            <Link to="/column">Column</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />{' '}
      </div>
      <div>Footer</div>
    </div>
  );
}

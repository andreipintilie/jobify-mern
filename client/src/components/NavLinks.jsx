import { NavLink } from 'react-router-dom';
import links from '../utils/Links';
// Update this import to use the correct path
import { useDashboardContext } from '../pages/DashboardLayout';

function NavLinks({ isBigSidebar }) {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;

        if (path === 'admin' && role !== 'admin') return;

        return (
          <NavLink
            key={text}
            to={path}
            className='nav-link'
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;

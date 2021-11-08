import { NavLink as ReactRouterNavLink } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

function NavLink({ to, children }: NavLinkProps) {
  return (
    <ReactRouterNavLink to={to} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
      { children }
    </ReactRouterNavLink>
  );
}

export default NavLink;
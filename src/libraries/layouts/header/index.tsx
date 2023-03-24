import clsx from 'clsx';
import { IconName, RenderIcon } from 'libraries/icons';
import Logo from 'libraries/logo';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { routePath } from 'routers/config';

export type HeaderLayoutProps = {
  navigates: { icon: IconName; title: string; url: string }[];
  menuBars: { title: string; url: string }[];
};
export default function HeaderLayout({ navigates, menuBars }: HeaderLayoutProps) {
  const ref = useRef(null);
  const inputRef = useRef(null);
  useOnClickOutside(ref, () => {
    const inputCheckbox: any = inputRef.current;
    if (inputCheckbox && inputCheckbox.checked === true) return (inputCheckbox.checked = false);
  });

  return (
    <div className="bg-dark-500 fixed w-full z-10">
      <div className="container flex w-full items-center justify-between">
        <Link to={routePath.HomePage}>
          <Logo />
        </Link>

        {/** Nav List */}
        <nav className="flex items-center">
          <ul className="hidden xl:flex items-center gap-8">
            {navigates.map((item, index) => {
              return <NavItem key={index} iconName={item.icon} title={item.title} url={item.url} />;
            })}
          </ul>

          {/** Menu Bar */}
          <div className="ml-16 relative">
            <input id="input_menu_bar" type="checkbox" hidden ref={inputRef} />
            <label htmlFor="input_menu_bar" className="menu_bar_active block cursor-pointer">
              <RenderIcon name="menu" className="text-primary-400" />
            </label>

            <label htmlFor="input_menu_bar" className="menu_bar_inactive block cursor-pointer">
              <RenderIcon name="close" className="text-primary-400" />
            </label>

            <ul ref={ref} className={clsx('dropdown_menu w-[280px]')}>
              {menuBars.map((item, index) => {
                return (
                  <Link to={item.url} key={index}>
                    <li className="dropdown_item-1 text-light font-light text-lg leading-[26px] line-clamp-1 px-8 py-[23px] bg-gray-400 cursor-pointer relative">
                      <div className="absolute top-0 left-0 right-0 w-full bg-light mix-blend-normal opacity-[0.15] h-[1px]"></div>
                      <div className="absolute bottom-0 left-0 right-0 w-full bg-dark-600 mix-blend-normal opacity-25 h-[1px]"></div>
                      {item.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

const NavItem = ({
  iconName,
  className,
  title,
  url
}: {
  iconName: IconName;
  className?: string;
  title: string;
  url: string;
}) => {
  return (
    <Link to={url}>
      <li className={clsx(className, 'flex items-center py-2 pl-2')}>
        <div className="relative">
          <RenderIcon name={iconName} className="text-primary-400 mr-2" />
          {iconName === 'info' && (
            <div className="w-4 h-4 rounded-full bg-primary-500 text-light text-[10px] font-secondary leading-[12px] flex items-center justify-center absolute top-0 right-0">
              1
            </div>
          )}
        </div>
        <p className="text-light font-light">{title}</p>
      </li>
    </Link>
  );
};

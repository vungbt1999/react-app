import { Link } from 'react-router-dom';

export type FooterLayoutProps = {
  navigates: {
    title: string;
    url: string;
  }[];
};

export default function FooterLayout({ navigates }: FooterLayoutProps) {
  return (
    <div className="bg-dark-500 py-14">
      <div className="container">
        <nav className="flex items-center gap-[45px] list-none">
          {navigates.map((item, index) => {
            return (
              <Link to={item.url} key={index}>
                <li className="text-light font-light text-[11px] leading-4 tracking-[0.033px]">
                  {item.title}
                </li>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

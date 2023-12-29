import { ToggleTheme } from "./ToggleTheme";

export const Navbar: React.FC = () => {
  return (
    <nav className="h-16 border-b border-b-black dark:border-b-white w-full">
      <div>oi</div>
      <ToggleTheme />
    </nav>
  );
};

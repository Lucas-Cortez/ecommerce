import { ToggleThemeButton } from "../ToggleThemeButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="mb-4 h-20 w-full border-b border-b-neutral-300 dark:border-b-neutral-800">
      <div className="flex h-full items-center justify-between px-8 sm:px-16 lg:px-24">
        <div>Home</div>

        <div>
          <ToggleThemeButton />
        </div>
      </div>
    </nav>
  );
};

import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const navigation = [
  { id: 1, title: "Bubble", path: "/bubble" },
  { id: 2, title: "Selection", path: "/selection" },
  { id: 3, title: "Merge", path: "/merge" },
  { id: 4, title: "Quicksort", path: "/quicksort" },
  { id: 5, title: "Counting", path: "/counting" },
  { id: 6, title: "Radix", path: "/radix" },
  { id: 7, title: "Bucket", path: "/bucket" },
  { id: 8, title: "Heap", path: "/heap" },
  { id: 9, title: "Shell", path: "/shell" },
  { id: 10, title: "Linear", path: "/linear" },
  { id: 11, title: "Binary", path: "/binary" },
];

const Navbar: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <nav className={styles.navbar}>
        {navigation.map((item) => (
          <Link
            className={pathname === item.path ? styles.active : undefined}
            key={item.id}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      {children}
    </>
  );
};

export default Navbar;

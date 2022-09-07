export type Routes = {
  href: "/" | `/${string}` | `#${string}` | "/*";
  component: React.FC;
  public?: boolean;
  label: string;
};

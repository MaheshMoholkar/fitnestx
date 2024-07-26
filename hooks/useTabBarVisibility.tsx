import { usePathname} from 'expo-router';

export function useTabBarVisibility() {
  const pathname = usePathname();

  // List of routes where tab bar should be hidden
  const hiddenTabBarRoutes = ['/qr'];

  // Determine if the tab bar should be hidden
  const shouldHideTabBar = hiddenTabBarRoutes.includes(pathname);

  return { shouldHideTabBar };
}

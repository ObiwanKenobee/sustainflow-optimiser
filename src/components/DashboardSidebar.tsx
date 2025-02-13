
import { Home, BarChart2, Box, Truck, Users, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Overview", icon: Home, href: "/", current: true },
  { name: "Analytics", icon: BarChart2, href: "/analytics", current: false },
  { name: "Inventory", icon: Box, href: "/inventory", current: false },
  { name: "Logistics", icon: Truck, href: "/logistics", current: false },
  { name: "Suppliers", icon: Users, href: "/suppliers", current: false },
  { name: "Reports", icon: FileText, href: "/reports", current: false },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col gap-y-5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r">
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <span className="text-xl font-semibold">SustainFlow</span>
      </div>
      <nav className="flex flex-1 flex-col px-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className={cn(
                  "group flex gap-x-3 rounded-md p-2 text-sm font-medium hover:bg-primary/5",
                  location.pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-auto mb-4">
            <Link
              to="/help"
              className="group flex gap-x-3 rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-primary/5"
            >
              <HelpCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              Help & Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}


import { Home, BarChart2, Box, Truck, Users, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Overview", icon: Home, href: "#", current: true },
  { name: "Analytics", icon: BarChart2, href: "#", current: false },
  { name: "Inventory", icon: Box, href: "#", current: false },
  { name: "Logistics", icon: Truck, href: "#", current: false },
  { name: "Suppliers", icon: Users, href: "#", current: false },
  { name: "Reports", icon: FileText, href: "#", current: false },
];

export function DashboardSidebar() {
  return (
    <div className="flex h-full flex-col gap-y-5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r">
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <span className="text-xl font-semibold">SustainFlow</span>
      </div>
      <nav className="flex flex-1 flex-col px-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  "group flex gap-x-3 rounded-md p-2 text-sm font-medium hover:bg-primary/5",
                  item.current ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {item.name}
              </a>
            </li>
          ))}
          <li className="mt-auto mb-4">
            <a
              href="#"
              className="group flex gap-x-3 rounded-md p-2 text-sm font-medium text-muted-foreground hover:bg-primary/5"
            >
              <HelpCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              Help & Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

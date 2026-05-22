'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    MousePointer2,
    Square,
    Type,
    Palette,
    Layout,
    FileText,
    Image,
    Table,
    Menu,
    Layers,
    Code2,
    ChevronDown,
    ChevronRight
} from 'lucide-react';

const menuItems = [
    {
        title: "Foundation",
        items: [
            { title: "Colors", url: "/design-system/colors", icon: Palette },
            { title: "Typography", url: "/design-system/typography", icon: Type },
            { title: "Layout", url: "/design-system/layout", icon: Layout },
        ]
    },
    {
        title: "Components",
        items: [
            { title: "Button", url: "/design-system/button", icon: MousePointer2 },
            { title: "Card", url: "/design-system/card", icon: Square },
            { title: "Form", url: "/design-system/form", icon: FileText },
            { title: "Table", url: "/design-system/table", icon: Table },
            { title: "Navigation", url: "/design-system/navigation", icon: Menu },
            { title: "Image", url: "/design-system/image", icon: Image },
        ]
    },
    {
        title: "Patterns",
        items: [
            { title: "Layouts", url: "/design-system/patterns/layouts", icon: Layers },
            { title: "Code Examples", url: "/design-system/patterns/code", icon: Code2 },
        ]
    }
];

export function AppSidebar() {
    const pathname = usePathname();
    const [openSections, setOpenSections] = useState<string[]>([]);

    const toggleSection = (sectionTitle: string) => {
        setOpenSections(prev =>
            prev.includes(sectionTitle)
                ? prev.filter(title => title !== sectionTitle)
                : [...prev, sectionTitle]
        );
    };

    return (
        <Sidebar className="border-r">
            <SidebarHeader className="border-b px-6 py-5 bg-gradient-to-br from-background to-muted/20">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold tracking-tight">Design System</h2>
                    <p className="text-xs text-muted-foreground">Component Library v1.0</p>
                </div>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4">
                {menuItems.map((section) => {
                    const isOpen = openSections.includes(section.title);
                    return (
                        <SidebarGroup key={section.title} className="mb-2">
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors group"
                            >
                                <div className="rounded-md bg-muted/50 p-1.5">
                                    {isOpen ? (
                                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </div>
                                <SidebarGroupLabel className="text-sm font-semibold text-foreground group-hover:text-foreground transition-colors flex-1 text-left">
                                    {section.title}
                                </SidebarGroupLabel>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <SidebarGroupContent>
                                    <SidebarMenu className="relative pl-6">
                                        {/* Línea vertical */}
                                        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border" />

                                        {section.items.map((item, index) => {
                                            const isActive = pathname === item.url;
                                            const isLast = index === section.items.length - 1;

                                            return (
                                                <SidebarMenuItem key={item.title} className="relative">
                                                    {/* Línea horizontal */}
                                                    <div className="absolute left-0 top-1/2 w-4 h-px bg-border" />

                                                    <SidebarMenuButton
                                                        asChild
                                                        isActive={isActive}
                                                        className="group relative rounded-lg transition-all hover:bg-muted/80 pl-4"
                                                    >
                                                        <Link href={item.url} className="flex items-center gap-3 py-2">
                                                            <item.icon className={`h-4 w-4 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                                                                }`} />
                                                            <span className={`text-sm font-medium ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground group-hover:text-foreground'
                                                                }`}>
                                                                {item.title}
                                                            </span>
                                                            {isActive && (
                                                                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                                                            )}
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            );
                                        })}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </div>
                        </SidebarGroup>
                    );
                })}
            </SidebarContent>

            <SidebarFooter className="border-t p-4 bg-muted/30">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Version</span>
                        <span className="font-mono font-semibold">1.0.0</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Components</span>
                        <span className="font-mono font-semibold">
                            {menuItems.reduce((acc, section) => acc + section.items.length, 0)}
                        </span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}

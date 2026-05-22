import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
    Palette,
    Type,
    Layout,
    MousePointer2,
    Square,
    FileText,
    Sparkles,
    BookOpen,
    Zap,
    Shield,
    ArrowRight,
    Code2,
    Layers
} from "lucide-react";

export default function DesignSystem() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/5 via-primary/10 to-transparent">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
                <div className="container relative mx-auto px-6 py-24 lg:py-32">
                    <div className="mx-auto max-w-4xl text-center space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold shadow-sm">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span>Design System v1.0</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            Build Better
                            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                User Interfaces
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            A comprehensive design system with reusable components, design tokens, 
                            and guidelines to create consistent and accessible experiences.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="gap-2 shadow-lg shadow-primary/25" asChild>
                                <Link href="/design-system/button">
                                    Get Started
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2" asChild>
                                <Link href="/design-system/colors">
                                    <BookOpen className="h-4 w-4" />
                                    Documentation
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16 space-y-24">
                {/* Features */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Design System?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Built with modern best practices and designed for scalability
                        </p>
                    </div>
                    
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Zap,
                                title: "Lightning Fast",
                                description: "Pre-built components accelerate your development workflow",
                                color: "text-yellow-500",
                                bg: "bg-yellow-500/10"
                            },
                            {
                                icon: Shield,
                                title: "Accessible First",
                                description: "WCAG compliant components for inclusive experiences",
                                color: "text-green-500",
                                bg: "bg-green-500/10"
                            },
                            {
                                icon: Palette,
                                title: "Fully Themeable",
                                description: "Customize every aspect to match your brand identity",
                                color: "text-purple-500",
                                bg: "bg-purple-500/10"
                            },
                            {
                                icon: Type,
                                title: "Type Safe",
                                description: "Built with TypeScript for better developer experience",
                                color: "text-blue-500",
                                bg: "bg-blue-500/10"
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="group relative overflow-hidden border-2 p-6 space-y-4 hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className={`relative rounded-xl ${feature.bg} p-3 w-fit`}>
                                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                                </div>
                                <div className="relative space-y-2">
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Categories */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Explore by Category</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to build modern applications
                        </p>
                    </div>
                    
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Foundation */}
                        <Card className="group relative overflow-hidden border-2 p-8 space-y-6 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-blue-500/10 p-3">
                                        <Palette className="h-7 w-7 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-2xl">Foundation</h3>
                                        <p className="text-sm text-muted-foreground">Design fundamentals</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Core design elements including colors, typography, spacing, and layout principles.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['Colors', 'Typography', 'Layout'].map((item) => (
                                        <Button key={item} size="sm" variant="ghost" className="hover:bg-blue-500/10" asChild>
                                            <Link href={`/design-system/${item.toLowerCase()}`}>
                                                {item}
                                                <ArrowRight className="h-3 w-3 ml-1" />
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Components */}
                        <Card className="group relative overflow-hidden border-2 p-8 space-y-6 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-purple-500/10 p-3">
                                        <MousePointer2 className="h-7 w-7 text-purple-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-2xl">Components</h3>
                                        <p className="text-sm text-muted-foreground">UI building blocks</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Production-ready components that you can copy, paste, and customize.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['Button', 'Card', 'Form', 'Table'].map((item) => (
                                        <Button key={item} size="sm" variant="ghost" className="hover:bg-purple-500/10" asChild>
                                            <Link href={`/design-system/${item.toLowerCase()}`}>
                                                {item}
                                                <ArrowRight className="h-3 w-3 ml-1" />
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Patterns */}
                        <Card className="group relative overflow-hidden border-2 p-8 space-y-6 hover:shadow-2xl hover:border-green-500/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-green-500/10 p-3">
                                        <Layers className="h-7 w-7 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-2xl">Patterns</h3>
                                        <p className="text-sm text-muted-foreground">Design solutions</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Common design patterns and code examples for complex scenarios.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['Layouts', 'Code Examples'].map((item) => (
                                        <Button key={item} size="sm" variant="ghost" className="hover:bg-green-500/10" asChild>
                                            <Link href={`/design-system/patterns/${item.toLowerCase().replace(' ', '-')}`}>
                                                {item}
                                                <ArrowRight className="h-3 w-3 ml-1" />
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 md:p-16 text-center">
                    <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_85%)]" />
                    <div className="relative space-y-6 text-primary-foreground">
                        <div className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm p-4">
                            <Code2 className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">Start Building Today</h2>
                        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                            Join developers building better products with our design system. 
                            Get started in minutes with our comprehensive documentation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" variant="secondary" className="gap-2 shadow-xl" asChild>
                                <Link href="/design-system/button">
                                    <MousePointer2 className="h-4 w-4" />
                                    View Components
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                                <Link href="/design-system/colors">
                                    <Palette className="h-4 w-4" />
                                    Explore Foundation
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="grid gap-8 md:grid-cols-3">
                    {[
                        { value: "11+", label: "Components", sublabel: "Ready to use" },
                        { value: "3", label: "Categories", sublabel: "Well organized" },
                        { value: "100%", label: "Customizable", sublabel: "Your brand, your way" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center space-y-2 p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow">
                            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold">{stat.label}</div>
                            <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
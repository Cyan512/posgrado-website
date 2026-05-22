import { Button } from "@/components/ui/button";
import { Download, Mail, Plus, Trash2 } from "lucide-react";

export default function ButtonPage() {
    return (
        <div className="container mx-auto p-8 space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Button</h1>
                <p className="text-muted-foreground">
                    Displays a button or a component that looks like a button.
                </p>
            </div>

            {/* Variantes */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">Variants</h2>
                    <p className="text-sm text-muted-foreground">
                        Different button styles for different use cases.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                </div>
            </section>

            {/* Tamaños */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">Sizes</h2>
                    <p className="text-sm text-muted-foreground">
                        Different button sizes to fit your design.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Button size="xs">Extra Small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                </div>
            </section>

            {/* Con iconos */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">With Icons</h2>
                    <p className="text-sm text-muted-foreground">
                        Buttons with icons for better visual communication.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button>
                        <Mail />
                        Login with Email
                    </Button>
                    <Button variant="secondary">
                        <Download />
                        Download
                    </Button>
                    <Button variant="outline">
                        <Plus />
                        Add Item
                    </Button>
                    <Button variant="destructive">
                        <Trash2 />
                        Delete
                    </Button>
                </div>
            </section>

            {/* Solo iconos */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">Icon Only</h2>
                    <p className="text-sm text-muted-foreground">
                        Icon buttons for compact interfaces.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Button size="icon-xs" variant="outline">
                        <Plus />
                    </Button>
                    <Button size="icon-sm" variant="outline">
                        <Plus />
                    </Button>
                    <Button size="icon" variant="outline">
                        <Plus />
                    </Button>
                    <Button size="icon-lg" variant="outline">
                        <Plus />
                    </Button>
                </div>
            </section>

            {/* Estados */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">States</h2>
                    <p className="text-sm text-muted-foreground">
                        Different button states.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button aria-invalid>Invalid</Button>
                </div>
            </section>

            {/* Combinaciones de variantes y tamaños */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">Combinations</h2>
                    <p className="text-sm text-muted-foreground">
                        All variants in different sizes.
                    </p>
                </div>
                <div className="space-y-6">
                    {/* Default */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Default</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="default" size="xs">Extra Small</Button>
                            <Button variant="default" size="sm">Small</Button>
                            <Button variant="default" size="default">Default</Button>
                            <Button variant="default" size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Secondary */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Secondary</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="secondary" size="xs">Extra Small</Button>
                            <Button variant="secondary" size="sm">Small</Button>
                            <Button variant="secondary" size="default">Default</Button>
                            <Button variant="secondary" size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Outline */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Outline</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="outline" size="xs">Extra Small</Button>
                            <Button variant="outline" size="sm">Small</Button>
                            <Button variant="outline" size="default">Default</Button>
                            <Button variant="outline" size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Ghost */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Ghost</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="ghost" size="xs">Extra Small</Button>
                            <Button variant="ghost" size="sm">Small</Button>
                            <Button variant="ghost" size="default">Default</Button>
                            <Button variant="ghost" size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Destructive */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Destructive</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="destructive" size="xs">Extra Small</Button>
                            <Button variant="destructive" size="sm">Small</Button>
                            <Button variant="destructive" size="default">Default</Button>
                            <Button variant="destructive" size="lg">Large</Button>
                        </div>
                    </div>

                    {/* Link */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Link</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="link" size="xs">Extra Small</Button>
                            <Button variant="link" size="sm">Small</Button>
                            <Button variant="link" size="default">Default</Button>
                            <Button variant="link" size="lg">Large</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
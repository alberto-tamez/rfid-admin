import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function RegisterPage() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Crea un nuevo Usuario</CardTitle>
                <CardDescription>En un click, despliega un nuevo usuario en la base de datos</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">idCredencial</Label>
                            <Input id="name" placeholder="A01234567" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nombre</Label>
                            <Input id="name" placeholder="Nombre del usuario" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" placeholder="Correo electronici del usuario" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Contraseña</Label>
                            <Input id="name" placeholder="Contraseña del usuario" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}

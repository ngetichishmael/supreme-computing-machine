import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "./components/ui/hover-card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "./components/ui/avatar.tsx";
import {Button} from "./components/ui/button.tsx";

interface Country {
    name: {
        common: string
    },
    independent: boolean,
    status: string,
    region: string,
    subregion: string,
    flag: string,
    flags: {
        png: string,
        svg: string
    }

}

export function Countries() {
    const [countries, setCountries] = useState<Country[]>([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
    })
    return (
        <Table>
            <TableCaption>A list of countries.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Name Common</TableHead>
                    <TableHead>Independence</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sub Region</TableHead>
                    <TableHead className="text-right">Region</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {countries.map((country) => (
                    <TableRow key={country.name.common}>
                        <TableCell className="font-medium">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button variant="ghost"> {country.name.common} {country.flag} </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                    <div className="flex justify-between space-x-4">
                                        <Avatar>
                                            <AvatarImage src={country.flags.svg}/>
                                            <AvatarFallback>{country.flag}</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1 ">
                                            <img className={'width-23'} src={country.flags.png}
                                                 alt={"no image"}/>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </TableCell>
                        <TableCell>{String(country.independent)}</TableCell>
                        <TableCell>{country.status}</TableCell>
                        <TableCell>{country.subregion}</TableCell>
                        <TableCell className="text-right">{country.region}</TableCell>
                    </TableRow>

                ))}
            </TableBody>
        </Table>
    )
}

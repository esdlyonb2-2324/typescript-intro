class Bidule{
    name : string = "coucou"
    age? : any
    autreChose : number | string

    unTuple : [string, number]

}
class Truc {
    name : string
    bidules : Bidule[]

}
let monTruc = new Truc()
monTruc.name = "blabla"
monTruc.bidules = [
    {
       name: "coucou",
       autreChose : 12,
       unTuple : ["son", 43]
    }
]

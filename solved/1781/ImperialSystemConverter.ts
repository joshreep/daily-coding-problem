type Unit = {
    name: string
    abbreviation: string
    numberOfFeet: number
}

const defaultUnits: Unit[] = [
    { name: 'inch', abbreviation: 'in', numberOfFeet: 1 / 12 },
    { name: 'foot', abbreviation: 'ft', numberOfFeet: 1 },
    { name: 'mile', abbreviation: 'mi', numberOfFeet: 5280 },
]

export default class ImperialSystemConverter {
    private _units: Unit[]

    constructor(units: Unit[] = defaultUnits) {
        this._units = units
    }

    private _getUnit(unitName: string) {
        return this._units.find((unit) => unit.name === unitName)
    }

    private _getUnitOrThrow(unitName: string) {
        const unit = this._getUnit(unitName)

        if (unit) return unit

        throw new Error(`The unit "${unitName}" has not be registered`)
    }

    addUnit(unit: Unit) {
        if (this._getUnit(unit.name)) throw `The unit "${unit.name}" already exists`

        this._units.push(unit)
    }

    convertUnit(value: number, from: string, to: string) {
        const fromUnit = this._getUnitOrThrow(from)
        const toUnit = this._getUnitOrThrow(to)

        const numFeet = value * fromUnit.numberOfFeet

        return numFeet / toUnit.numberOfFeet
    }
}

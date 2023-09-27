class person {
    constructor(firstname,lastname,dateofBirth){
        this.firstname = firstname
        this.lastname = lastname
        this.dateofBirth = dateofBirth
    }
    // firstname : 'Rose' , lastname : 'Marry' , dateofBirth : new Date("December 17, 1995 03:24:00"),
    getFullName (){
        return `${this.lastname} ${this.firstname}`
    }
    getAge(){
        const millitoday = Date.now() //millisecond of today
        const milliBirthDate = this.dateofBirth.getTime() // millisecond of dateOfBirth
        const milliDiff = millitoday - milliBirthDate
        const dateofmilliDiff = new Date(milliDiff)
        return dateofmilliDiff.getFullYear() - 1970 //getFullyear = return year of this date
    }
    isEqual(anotherPerson){
        return (this.firstname?.toLowerCase() === anotherPerson.firstname?.toLowerCase() &&
        this.lastname?.toLowerCase() === anotherPerson.lastname?.toLowerCase()
        )
    }
    toString(){
        return `${this.getFullName()} , ${this.getAge()}`
    }
}


const me = new person('Jhatniphat', 'Sarakal' , new Date(2004,5,4))
console.log(me.getAge())

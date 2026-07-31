interface Person { 

    age: number;
    name: string;
}

interface Employee extends Person { 
    id: number;
}

const emp: Employee = { 
    
    age: 45,
    name: "Jane",
    id: 1,

}

console.log(emp);
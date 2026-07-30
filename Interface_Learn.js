interface user { 
    id: number;
    name: string;
    age: number;
    course: string[];
}


interface admin  extends user{ 
    permissionlevel: string;

}

const client: admin = {

    id: 1,
    name: 'book',
    age: 2,
    course: ['java', 'python'],
    permissionlevel: 'ab',

};

console.log(client);





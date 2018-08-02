class ToDo{
    constructor(name,dueDate,list)
    {
        //var list = [];
        this.name = name;
        this.dueDate = dueDate;
        this.list = list;
    }

}

function main()
{
    newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"]);
    console.log(newToDoList.list)
}

main();
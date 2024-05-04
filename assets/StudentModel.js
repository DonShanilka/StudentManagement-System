class StudentModel {
    constructor(id,fName,lName,address,program){
        this._id = id;
        this._fName = fName;
        this._lname = lName;
        this._address = address;
        this._program = program;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get fName(){
        return this._fName;
    }

    set fName(fName){
        this._fName = fName;
    }

    get lName(){
        return this.lName;
    }

    set lName(lName){
        this._lName = lName;
    }

    get address(){
        return this.address;
    }

    set address(address){
        this._address = address;
    }

    get program(){
        return this._program;
    }

    set program(program){
        this._program = program;
    }

}
var undaa = { name: "Undaa" };
undaa.name = "tsainii turliin undaa ";
undaa.uuh = function() {
    console.log(this.name + " uuj baina");
};
undaa.savlah = function() {
    console.log(this.name + " savlaj baina");
};

var tsai = Object.create(undaa);
tsai.name = "zugiin baltai tsai ";
tsai.amttai = function() {
    console.log(this.name + " amttai baina");
};
tsai.sergeeh = function() {
    console.log(this.name + " sergeej baina");
};

var fuzeTea = Object.create(tsai);
fuzeTea.name = "fuze tea";
fuzeTea.amttan = function() {
    console.log(this.name + " zugiin bal liirnii amttai");
};
fuzeTea.uildverleh = function() {
    console.log(this.name + " uildverlej baina");
}
//console.log(fuzeTea.__proto__);
//console.log(fuzeTea.__proto__.__proto__);

undaa.uuh();
undaa.savlah();

tsai.uuh();
tsai.savlah();
tsai.amttai();
tsai.sergeeh();

fuzeTea.uuh();
fuzeTea.savlah();
fuzeTea.amttai();
fuzeTea.sergeeh();
fuzeTea.amttan();
fuzeTea.uildverleh();



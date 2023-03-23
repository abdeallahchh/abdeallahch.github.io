var names=new Array();
names[0]="yaakov";
names[1]="Jbdo";
names[2]="ali";
names[3]="imran";
names[4]="ziko";
names[5]="Jhaimae";
names[6]="walid";
names[7]="jara";
names[8]="farouk";
names[9]="Jouness";

for (var i=0 ; i<names.length;i++) {
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye  "+ names[i]);
    }
    else{
        console.log("hello  "+ names[i]);
    }
    
}

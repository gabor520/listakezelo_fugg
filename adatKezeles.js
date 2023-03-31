export function rendezesSzoveg(list){
    list.sort();
    console.log(list); //list rendezett
}
export function veletlenSorrend(list){
    list.sort(function (a,b) {
        console.log
    })
}



export function objRendezesNevSzerint(list){
    list.sort(function (a,b){
       
        console.log(a.nev < b.nev);
        
            e= -1;
        }
        return b.kor - a.kor;

    ));
}


export function objRendezesNevSzerint(list){
    list.sort(function (a,b){
        let e =1;
        console.log(a.nev < b.nev);
        if (a.nev<b.nev){
            e= -1;
        }
        return e;

    });
}

export function szuresKorSzerint(list){
    let szurtLista = list.filter(function(obj){
        console.log(obj.kor +felt);
        return eval (obj.kor +felt);
    });
console.log(szurtLista);
return szurtLista;
}

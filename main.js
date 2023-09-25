import './style.css'


document.addEventListener("DOMContentLoaded", init);

function init() {

  const szamitGomb = document.getElementById("szamit");
  szamitGomb.addEventListener("click", teruletEsKeruletSzamit);

}

function teruletEsKeruletSzamit() {
  let a_oldal = parseFloat(document.getElementById("aOldal").value);
  let b_oldal = parseFloat(document.getElementById("bOldal").value);
  let c_oldal = parseFloat(document.getElementById("cOldal").value);
  let eredmeny = document.getElementById("eredmeny");
  if (a_oldal + b_oldal <= c_oldal || a_oldal + c_oldal <= b_oldal || b_oldal + c_oldal <= a_oldal) {
    eredmeny.textContent = "Hibás adatok! A háromszög nem szerkeszhető!"

  }else
  {
    let haromszog = {
      a: a_oldal,
      b:b_oldal,
      c: c_oldal,
      kerulet: function(){
        return this.a+this.b+this.c;
      },
      terulet: function(){
        let s = this.kerulet()/2;
        return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
      },
      keruletEsTeruletSzoveges:function(){
        return `Kerület: ${this.kerulet()} - Terület ${this.terulet()}`;
      }
    };
    console.log(haromszog);
    eredmeny.textContent=haromszog.keruletEsTeruletSzoveges();
  }
}


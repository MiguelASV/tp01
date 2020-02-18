export class anim_sousEntete {
    constructor(elmSousEntete) {
      this.elmSousEntete = elmSousEntete
    }
    
    animSousEntete(){
        console.log('///////// animation //////////')
        //console.log(this.elmEntete.tagName)
        let elmTitre = this.elmSousEntete.children[1]
        console.log(elmTitre.tagName)
        elmTitre.classList.add('animSousEntete')
    }
    
    }
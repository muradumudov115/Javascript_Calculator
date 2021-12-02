class CustomMatch{

    constructor(a){
     this.a=a;
    }
       plus(b){
        this.a=this.a+b
        return this;
       }
       minus(c){
         this.a=this.a-c
         return this;      
        }

      multiply(d){
        this.a=this.a*d
        return this;
      }

     divide(e){
        this.a=this.a/e
        return this;
     }

}
var result = new CustomMatch(100).plus(6).minus(30).multiply(3).divide(2)

console.log(result);
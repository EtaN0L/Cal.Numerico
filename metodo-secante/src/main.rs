fn main() {
    use std::process::exit;

fn main() {
 let x0:f64 = 1.5;
 let x1:f64 = 1.7;
 let mut x:f64 = x0 - funcao(x0);

 for i in 1..100 {
    let xx = x - funcao(x);
    if xx == x {
        println!("Valor de x{} é {:.4}",i-1,x);
        exit(0); // ao encontrar a raiz printa e crasha, maximo de 100 interações
    }
    x = xx; 
    
 }
 

 
}

fn funcao(x:f64) -> f64 { // a função é x²+x-6
    x*x+x-6.0
}

fn funcaophi(x0:f64,x1:f64) -> f64 {
    x0*funcao(x1)-x1*funcao(x0)/funcao(x1)-funcao(x1)
}

}

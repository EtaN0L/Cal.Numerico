use std::process::exit;

fn main() {
 let x0:f64 = 2.0;
 let mut x:f64 = x0 - funcao(x0)/funcaoderivada(x0);

 for i in 1..100 {
    let xx = x - funcao(x)/funcaoderivada(x);
    if xx == x {
        println!("Valor de x{} é {:.4}",i-1,x);
        exit(0); // ao encontrar a raiz printa e crasha, maximo de 100 interações
    }
    x = xx; 
    
 }
 
}

fn funcao(x:f64) -> f64 { // a função
    x - x.cos()
}

fn funcaoderivada(x:f64) -> f64 { // a derivada da função
    1.0 + x.sin()
}